import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';

@Service()
export class WelcomeData {

    private http = inject(HttpClient);

    executeHelloWorldService() {
        console.log("Execute HelloWorld Bean Service");
        return this.http.get("http://localhost:8080/api/hello-world");
    }

}
