import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { HoaCheckboxComponent } from "./hoa-checkbox/hoa-checkbox.component";
import { HoaCheckboxHarness } from "./hoa-checkbox/hoa-checkbox.harness";

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let loader: HarnessLoader;

  beforeAll(() => {
    // TestBed.initTestEnvironment(
    //   BrowserDynamicTestingModule,
    //   platformBrowserDynamicTesting()
    // );
  });

  const testSetup = (options?: {
    disabled?: boolean;
    checked?: boolean;
    indeterminate?: boolean;
  }) => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, HoaCheckboxComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);

    fixture.componentInstance.disabled = options?.disabled;
    fixture.componentInstance.checked = options?.checked;
    fixture.componentInstance.indeterminate = options?.indeterminate;
  };

  it("should render title 'Welcome to app!!' in a h1 tag", async(() => {
    testSetup();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to app!!'
    );
  }));

  it('checkbox should be disabled (without harness)', async () => {
    testSetup({
      disabled: true,
    });
    const checkbox = fixture.debugElement.nativeElement.querySelector(
      '[data-test=hoa-checkbox--input]'
    );

    expect(
      coerceBooleanProperty(checkbox.getAttribute('disabled'))
    ).toBeTruthy();
  });

  it('checkbox should be disabled', async () => {
    testSetup({
      disabled: false,
    });
    const checkboxHarness = await loader.getHarness(HoaCheckboxHarness);
    expect(await checkboxHarness.isDisabled()).toBeTruthy();
  });

  it('checkbox should be checked', async () => {
    testSetup({
      checked: true,
    });
    const checkboxHarness = await loader.getHarness(HoaCheckboxHarness);
    expect(await checkboxHarness.isChecked()).toBeTruthy();
  });

  it('checkbox should be indeterminate', async () => {
    testSetup({
      indeterminate: true,
    });
    const checkboxHarness = await loader.getHarness(HoaCheckboxHarness);
    expect(await checkboxHarness.isIndeterminate()).toBeFalsy();
  });
});
