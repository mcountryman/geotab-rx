using System;
using System.Linq;
using System.Reflection;
using System.Collections.Generic;
using Sicilian.Ast;
using System.Threading.Tasks;
using Namotion.Reflection;

namespace Sicilian {
  public class Parser {
    public Parser() {
      _types[typeof(char)] = new Number();
      _types[typeof(byte)] = new Number();
      _types[typeof(sbyte)] = new Number();
      _types[typeof(int)] = new Number();
      _types[typeof(uint)] = new Number();
      _types[typeof(short)] = new Number();
      _types[typeof(ushort)] = new Number();
      _types[typeof(long)] = new Number();
      _types[typeof(ulong)] = new Number();
      _types[typeof(float)] = new Number();
      _types[typeof(double)] = new Number();
      _types[typeof(decimal)] = new Number();

      _types[typeof(object)] = new Any();
      _types[typeof(string)] = new Ast.Stringe();
      _types[typeof(DateTime)] = new Date();
      _types[typeof(TimeSpan)] = new Date();
    }

    public async Task<IList<IRoot>> Parse(Assembly assembly, Predicate<Type> filter) {
      return await ParseNext(assembly, filter).ToListAsync();
    }

    public async IAsyncEnumerable<IRoot> ParseNext(Assembly assembly, Predicate<Type> filter) {
      foreach (var type in assembly.ExportedTypes) {
        var root = await ParseRoot(type);
        if (root != null) {
          _types.Add(type, root);

          if (!filter(type)) continue;
          yield return root;
        }
      }
    }

    public async Task<IRoot?> ParseRoot(Type type) {
      if (type.IsClass) {
        return await ParseInterface(type);
      }

      return null;
    }

    public async Task<Interface?> ParseInterface(Type type) {
      var members = await ParseInterfaceMembers(type).ToListAsync();
      if (members.Count < 1) return null;

      return new Interface {
        Name = type.Name,
        Docs = await ParseDocs(type),
        Members = members,
      };
    }

    public async IAsyncEnumerable<Member> ParseInterfaceMembers(Type type) {
      foreach (var field in type.GetFields()) {
        if (field.IsStatic) continue;

        yield return new Member {
          Name = field.Name,
          Docs = await ParseDocs(field),
          Type = ParseTypeRef(field.FieldType),
        };
      }

      foreach (var property in type.GetProperties()) {
        if (property.DeclaringType != type) continue;
        if (property.GetMethod?.IsStatic == true) continue;
        if (property.GetMethod?.IsPublic != true) continue;

        yield return new Member {
          Name = property.Name,
          Docs = await ParseDocs(property),
          Type = ParseTypeRef(property.PropertyType),
        };
      }
    }

    public Lazy<IType?> ParseTypeRef(Type type) {
      return new Lazy<IType?>(() => {
        if (_types.ContainsKey(type)) {
          return _types[type];
        }

        var enumerable = type
          .GetInterfaces()
          .Concat(new[] { type })
          .FirstOrDefault(i => i.IsGenericType && i.GetGenericTypeDefinition() == typeof(IEnumerable<>));

        if (enumerable != null) {
          Console.WriteLine($"Checking '{type}' not registered!");
          var inner = type.GetGenericArguments().First();

          if (_types.ContainsKey(inner)) {
            return new Ayray(_types[inner]);
          }
        }

        if (type.IsGenericType && type.GetGenericTypeDefinition() == typeof(Nullable<>)) {
          var inner = type.GetGenericArguments().First();
          if (_types.ContainsKey(inner)) {
            return new Knullable(_types[inner]);
          }
        }

        Console.WriteLine($"Type '{type}' not registered!");
        return null;
      });
    }

    public async Task<Docs?> ParseDocs(MemberInfo member) {
      return new Docs {
        Summary = member.GetXmlDocsRemarks(),
      };
    }

    private readonly IDictionary<MemberInfo, IType> _types = new Dictionary<MemberInfo, IType>();
  }
}
