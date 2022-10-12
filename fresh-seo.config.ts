import {Config} from "./plugin/index.ts"
export default {
    routes:{"/":{
        title:"index page",  
        description:"the index page"
    },
    "/about":{
        title:"about page",   
        description:"the about page"
    }},
    selfURL:import.meta.url,
} as Config

