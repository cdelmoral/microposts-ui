/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { HelpComponent } from './help.component';

describe('Component: Help', () => {
  it('should create an instance', () => {
    let component = new HelpComponent();
    expect(component).toBeTruthy();
  });
});