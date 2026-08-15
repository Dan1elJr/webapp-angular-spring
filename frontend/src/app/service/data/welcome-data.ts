import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';

export class HelloWorldBean{
    constructor(public message: string) {}
}

@Service()
export class WelcomeData {

    private http = inject(HttpClient);
    private readonly apiBaseUrl = `http://${window.location.hostname}:8080/api`;

    executeHelloWorldService() {
        console.log("Execute HelloWorld Bean Service");
        return this.http.get<HelloWorldBean>(`${this.apiBaseUrl}/hello-world`);
    }

    executeHelloWorldServiceWhithPathVariable(name: string) {
        console.log("Execute HelloWorld Bean Service");
        return this.http.get<HelloWorldBean>(`${this.apiBaseUrl}/hello-world/${name}`);
    }

}
