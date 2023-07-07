import { Component, Input } from '@angular/core';

@Component({
  selector: 'hoa-checkbox',
  template: `<label data-test="hoa-checkbox--label">
    <input
      type="checkbox"
      name="checkbox"
      disabled="disabled"
      [checked]="checked"
      [indeterminate]="indeterminate"
      data-test="hoa-checkbox--input"
    />
    Checkbox
  </label>`,
  styles: [
    `
  input:indeterminate {
    background: lime;
  }`,
  ],
})
export class HoaCheckboxComponent {
  @Input() disabled = false;
  @Input() checked = false;
  @Input() indeterminate = false;
}
