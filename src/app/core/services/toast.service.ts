import { Injectable }    from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { Toast }         from '../models/toast';

@Injectable()
export class ToastService {
  constructor(
    public toastr: ToastrService,
    ) { }

  public showToastSuccess(params: Toast): void {
    this.toastr.success(params.description, params.header);
  }

  public showToastError(params: Toast): void {
    this.toastr.error(params.description, params.header, { timeOut: 10000 });
  }

  public showToastWarning(params: Toast): void {
    this.toastr.warning(params.description, params.header);
  }

  public showToastInfo(params: Toast): void {
    this.toastr.info(params.description, params.header);
  }
}
