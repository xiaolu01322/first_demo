# demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



### setup

### ref reference toRefs
```
响应式状态需要明确使用响应式 APIs 来创建 ref
ref创建响应性引用


官方推荐我们在定义数据的时候，reactive定义复杂的数据类型的数据，ref推荐定义基本数据类型，所以如果要使用reactive定义基本数据类型的话，我们需要在reactive中将数据包装一下

reactive 和 ref 都是用来定义响应式数据的 reactive更推荐去定义复杂的数据类型 ref 更推荐定义基本类型

ref 和 reactive 本质我们可以简单地理解为ref是对reactive的二次包装， ref定义的数据访问的时候要多一个.value

使用ref定义基本数据类型，ref也可以定义数组和对象。
```
