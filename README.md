# generator-easy-react 

> [Yeoman](http://yeoman.io) generator for build [React](http://facebook.github.io/react/index.html) app eaisly.


## Usage
Install generator-easy-react
```
npm install -g generator-easy-react
```

Make a new directory, and cd into it:
```bash
mkdir new_react_project && cd $_
```

Run `yo easy-react`
```bash
yo easy-react
```

Run `gulp` for building and preview

###Directory
####app/javascripts/templates
for your jsx
####app/javascripts/components
for your component

###Custom Element in html
If you use custom element in html:
```html
<div>
	<HelloMessage name="John" />
</div>
```

You Must add require path about the custom element component:

```
<!-- var HelloMessage = require('.././components/hello_message'); -->
<div>
	<HelloMessage name="John" />
</div>
```



## License

MIT
