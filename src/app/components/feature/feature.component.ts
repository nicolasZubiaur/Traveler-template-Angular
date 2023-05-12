import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-feature',
  templateUrl: 'feature.component.html',
  styleUrls: ['feature.component.css'],
})
export class Feature {
  @Input()
  Description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  @Input()
  Icon: string = '/assets/playground_assets/thumbs-up.svg'
  @Input()
  Header: string = 'Hand Picked Guides'
  constructor() {}
}
