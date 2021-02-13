import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from "@angular/core";
import { ScrollDispatcher, VIRTUAL_SCROLL_STRATEGY } from "@angular/cdk/scrolling";
import { ContextViewerStrategy } from "../../strategies/context-viewer.strategy";

const ARRAY_LENGTH = 100;

@Component({
  selector: "container",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: VIRTUAL_SCROLL_STRATEGY,
      useClass: ContextViewerStrategy
    }
  ]
})
export class ContainerComponent implements OnInit {
  index: number;
  items: any[] = Array(ARRAY_LENGTH).fill(null);

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private scroll: ScrollDispatcher
  ) {}

  ngOnInit() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i] = i;
    }

this.scroll.scrolled().subscribe(console.log)

  }

  fetchMoreitems(newIndex: number) {}

  scrolledIndexChange(index) {
    this.fetchMoreitems(index);
    this.index = index;
  }
}
