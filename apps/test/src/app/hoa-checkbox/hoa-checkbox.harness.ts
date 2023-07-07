import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  BaseHarnessFilters,
  ComponentHarness,
  ComponentHarnessConstructor,
  HarnessPredicate,
} from '@angular/cdk/testing';

const selector = 'hoa-checkbox';

export class HoaCheckboxHarness extends ComponentHarness {
  static hostSelector = selector;

  protected input = this.locatorFor(`[data-test=${selector}--input]`);

  async isDisabled(): Promise<boolean> {
    const disabled = (await this.input()).getProperty<boolean>('disabled');
    return coerceBooleanProperty(await disabled);
  }

  async isIndeterminate(): Promise<boolean> {
    const isIndeterminate = (await this.input()).getProperty<boolean>(
      'indeterminate'
    );
    return coerceBooleanProperty(await isIndeterminate);
  }

  async isChecked(): Promise<boolean> {
    const checked = (await this.input()).getProperty<boolean>('checked');
    return coerceBooleanProperty(await checked);
  }

  static with<T extends HoaCheckboxHarness>(
    this: ComponentHarnessConstructor<T>,
    options: BaseHarnessFilters = {}
  ): HarnessPredicate<T> {
    return new HarnessPredicate(this, options);
  }
}
