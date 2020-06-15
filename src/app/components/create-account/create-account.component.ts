import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Visitor} from '../../models/Visitor';
import {AccountService} from '../../services/account/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  visitor: Visitor;

  visitorForm;

  constructor(private formBuilder: FormBuilder,
              private accountService: AccountService) {
    this.visitorForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      lastname: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(customerData) {
    this.visitorBuilder(customerData);
    this.accountService.postVisitor(this.visitor);
  }

  private visitorBuilder(customerData) {
    this.visitor = new Visitor();
    this.visitor.firstname = customerData.firstName;
    this.visitor.lastname = customerData.lastName;
    this.visitor.emailadress = customerData.email;
    this.visitor.password = customerData.password;
  }
}
