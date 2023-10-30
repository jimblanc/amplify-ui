import { Component } from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { Amplify } from 'aws-amplify';

import { signIn, signOut } from 'aws-amplify/auth';
import { ConsoleLogger } from 'aws-amplify/utils';

import awsExports from './aws-exports';

ConsoleLogger.LOG_LEVEL = 'DEBUG' as unknown as null;
@Component({
  selector: 'auth-status',
  templateUrl: 'auth-status.component.html',
})
export class AuthStatusComponent {
  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(awsExports);
  }

  get isAuthenticated(): boolean {
    return this.authenticator.authStatus === 'authenticated';
  }

  signOut() {
    signOut();
  }

  handleSubmit(event: Event) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    signIn(Object.fromEntries(formData) as any);
  }
}
