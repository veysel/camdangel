import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
    exportAs: "page",
    selector: "page",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <p>{{ text }}</p>
  `
})
export class PageComponent {
    @Input() text = "test";
}