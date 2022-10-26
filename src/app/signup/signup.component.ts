import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    form: any = {
        username: null,
        email: null,
        password: null,

    };
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';
    test : Date = new Date();
    focus: any;
    focus1: any;
    focus2: any;
    constructor() { }

    ngOnInit() {}
    onSubmit(): void {
        const { username, email, password  } = this.form;
    //     this.authService.register(username, email, password).subscribe(
    //         (data: any) => {
    //             console.log(data);
    //             this.isSuccessful = true;
    //             this.isSignUpFailed = false;
    //         },
    //         (err: { error: { message: string; }; }) => {
    //             this.errorMessage = err.error.message;
    //             this.isSignUpFailed = true;
    //         }
    //     );
     }
}
