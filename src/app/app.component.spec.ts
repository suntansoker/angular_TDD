import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import {ProdComponent, User } from './app.component';
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('ProdComponent', () => {
    let component = new ProdComponent;
    let fixture: ComponentFixture<ProdComponent>;
    let submitEl: DebugElement;
    let nameEl: DebugElement;
    let quantityEl: DebugElement;
    // component = new DemoBeforeEachComponent;
    // let component: DemoBeforeEachComponent;
  
    beforeEach(() =>
    {
      //component = new DemoBeforeEachComponent; 
      TestBed.configureTestingModule({
        declarations: [ProdComponent]
      });

      fixture = TestBed.createComponent(ProdComponent);

      // get test component from the fixture
      component = fixture.componentInstance;

      submitEl = fixture.debugElement.query(By.css('button'));
      nameEl = fixture.debugElement.query(By.css('input[name=text1]'));
      quantityEl = fixture.debugElement.query(By.css('input[name=text2]'));
    }); 
   
    afterEach(() =>
    { 
      //cleanup after each test, if any
    });
  
    beforeAll(() => 
    {
      //executed once before all tests;
    });
  
   afterAll(() => 
    {
      //executed once after all tests;
    });
  
    // it('should check string or not', ()=>
    // {
    //     component.onClick("XYZ","e");
    //     expect(() => {
    //         throw new Error("It is not a number");
    //     }).toThrow(); //initial value = 0; it should become 1
    // });
    it('Toggle on and off', () => {
      expect(component.toggle).toBe(false);
      component.onClick("XYZ","3");
      expect(component.toggle).toBe(true);
  });

    it('Entering name and quantity', () => {
      let user: User;
      nameEl.nativeElement.value = "LaptopXYZ";
      quantityEl.nativeElement.value = "20";

      // Subscribe to the Observable and store the user in a local variable.
      component.loggedIn.subscribe((value) => user = value);

      // This sync emits the event and the subscribe callback gets executed above
      submitEl.triggerEventHandler('click', null);
     
      // Now we can check to make sure the emitted value is correct
      expect(user.Name).toBe( "LaptopXYZ");
      expect(user.Quant).toEqual("20");
  });
});