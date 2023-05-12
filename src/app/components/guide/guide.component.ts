import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-guide',
  templateUrl: 'guide.component.html',
  styleUrls: ['guide.component.css'],
})
export class Guide {
  @Input()
  Name: string = 'Miura Avaron'
  @Input()
  rootClassName: string = ''
  @Input()
  Portrait: string = '/assets/playground_assets/guide-1.png'
  @Input()
  Location: string = 'Tokyo, Japan'
  constructor() {}
}
