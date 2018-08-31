import { Pipe, PipeTransform }           from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({ name: 'safeHTML' })
export class SafeHTMLPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

 public transform(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
