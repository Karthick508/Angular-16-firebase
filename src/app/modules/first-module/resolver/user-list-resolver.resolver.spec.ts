import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { userListResolverResolver } from './user-list-resolver.resolver';

describe('userListResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => userListResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
