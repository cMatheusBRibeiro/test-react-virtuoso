# Test React Virtuoso

The project objective is test React Virtuoso library and validate funcionality to comporative projects.

## Summary

1. [Dependencies](#dependencies)
2. [Promise](#promise)
3. [Tests](#tests)
4. [Conclusion](#conclusion)
5. [References](#references)

## Dependencies

| Name           | Version  |
| -------------- | -------- |
| npm            | 11.2.0   |
| node           | v20.18.0 |
| next           | 15.2.3   |
| react          | 19.0.0   |
| react-virtuoso | 4.12.5   |


## Promise

The React Virtuoso will create a virtual scrollbar with your lists, tables and others componentes.

## Tests

In this projects, you will see two principal pages, "Without React Virtuoso" and "With React Virtuoso". In both, will be render a 1,000 items in a single list.

In the first, the list will be render in total, i.e., 1,000 items rendered at the same moment.

In the second, the list will be render in packs, as you scroll down, new items will be rendered.

## Conclusion

With these pages, we can conclude that the objective, in this case, was achieved. If we apply the React Virtuoso to a list, we can create a virtual scroll and optimize loading with larger list.

I think this will work fine with 1,000, 10,000 and 100,000 items, why not?

## References

1. [React Virtuoso](https://virtuoso.dev/)
2. [How to render LARGE lists in React? | Frontend System Design](https://www.youtube.com/watch?v=LKeC1_mgokU)