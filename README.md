# **Cosmos Demo**
## **Live Demo**

Check out the live demo[ here](https://cosmos-ds-demo.netlify.app/).


## **Table of Contents**



1. [Installation](#installation)
2. [Usage](#usage)
   - [Importing Components](#importing-components)
   - [Styling](#styling)
3. [Example](#example)
   - [Button](#button)
4. [License](#license)

**_Prerequisite: You need to have a setup with Webpack 5 and not vite._**


## **Installation**


### **Installing the Package**

To install the cosmos-demo package, use the following command:

Copy code


```
npm install cosmos-demo
```



## **Usage**


### **Importing Components**

To use the components in your Vue 3 project:

**Import the Component and CSS**: \
`// main.js`


```
import { createApp } from 'vue';
import App from './App.vue';
import 'cosmos-demo/dist/style.css';  // Import the bundled CSS

createApp(App).mount('#app');

```



1. **Use the Component**:
`// App.vue`


```
<template>
  <div>
    <h1>Minimal Vue Webpack</h1>
    <CosmosButton variant="primary">Hello World!</CosmosButton>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { CosmosButton } from 'cosmos-demo';

export default defineComponent({
  name: 'App',
  components: {
    CosmosButton,
  },
});
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 10px;
}
</style>

```



2.


### **Styling**

Ensure your main project imports the bundled CSS from cosmos-demo to apply the styles correctly.


## **Example:**


### **Button**


#### **Usage**


```
<CosmosButton variant="primary">Click Me!</CosmosButton>
```



#### **Props**



* `variant` (String): Button variant, e.g., `primary`, `secondary`.


## **License**

This project is licensed under the MIT License.
