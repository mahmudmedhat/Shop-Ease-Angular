import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, Renderer2, RendererFactory2, inject, } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MyTranslate {
  private _TranslateService = inject(TranslateService)
  private _Renderer2 = inject(RendererFactory2).createRenderer(null, null)
  private _PLATFORM_ID = inject(PLATFORM_ID)
  constructor() {



    if (isPlatformBrowser(this._PLATFORM_ID)) {

      this._TranslateService.setFallbackLang('en')//2

      //change diraction


      this.setLang();
    }
  }

  setLang(): void {
    if (isPlatformBrowser(this._PLATFORM_ID)) {

      const savedLang = localStorage.getItem("lang");
      if (savedLang === 'en') {
        this._Renderer2.setAttribute(document.documentElement, 'dir', 'ltr')
        this._Renderer2.setAttribute(document.documentElement, 'lang', 'en')

        document.documentElement.dir = 'ltr';
      } else if (savedLang === 'ar') {
        this._Renderer2.setAttribute(document.documentElement, 'dir', 'rtl')
        this._Renderer2.setAttribute(document.documentElement, 'lang', 'arr')

      }
    }
  }
  clangeLang(lang: string): void {
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      localStorage.setItem('lang', lang);
      this._TranslateService.use(lang);
      this.setLang();
    }
  }
}
