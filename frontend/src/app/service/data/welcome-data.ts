import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';

export class HelloWorldBean{
    constructor(public message: string) {}
}

@Service()
export class WelcomeData {

    private http = inject(HttpClient);

    executeHelloWorldService() {
        console.log("Execute HelloWorld Bean Service");
        return this.http.get<HelloWorldBean>("http://localhost:8080/api/hello-world");
    }

    executeHelloWorldServiceWhithPathVariable(name: string) {
        console.log("Execute HelloWorld Bean Service");
        return this.http.get<HelloWorldBean>(`http://localhost:8080/api/hello-world/${name}`);
    }

}
