/*
 * Project: ESP-IDF VSCode Extension
 * File Created: Wednesday, 14th October 2020 11:29:33 pm
 * Copyright 2020 Espressif Systems (Shanghai) CO LTD
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *    http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Vue from "vue";
import App from "./App.vue";
import store from "./store";

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");

window.addEventListener("message", (event) => {
  const message = event.data;
  switch (message.command) {
    default:
      break;
  }
});
