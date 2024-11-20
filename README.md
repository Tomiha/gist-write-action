# Gist-Write v1
Adapted version of [sergeysova/gist-write-action](https://github.com/sergeysova/gist-write-action)

## Usage

See [action.yml](./action.yml)

## Examples

Simple (just write content from input to a file to a gist):

```yaml
steps:
  - uses: Tomiha/gist-write-action@v1
    with:
      token: ${{secrets.TOKEN_WITH_GIST_WRITE_SCOPE}}
      gist_id: 7bcddb642d16d291959642fc60feec9b
      file_name: example.txt
      content: "100"
```

## License

The scripts and documentation in this project are released under the [MIT License](./LICENSE)
