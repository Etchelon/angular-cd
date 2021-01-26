import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'on-push-blocks-children',
  templateUrl: './on-push-blocks-children.component.html',
  styleUrls: ['./on-push-blocks-children.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushBlocksChildrenComponent {
    constructor(private readonly cdr: ChangeDetectorRef) {}

    noop(): void {}
}
