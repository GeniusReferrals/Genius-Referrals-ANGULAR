import { GRClient } from '../gr-client';
import { WidgetsPackageForm } from '../models/widgets-package-form';
import { WidgetForm } from '../models/widget-form';
import { WidgetPatchForm } from '../models/widget-patch-form';
import { WidgetTranslationForm } from '../models/widget-translation-form';
import { WidgetTranslationPatchForm } from '../models/widget-translation-patch-form';

export class WidgetsPackagesController {
  constructor(private client: GRClient) {}

  getWidgetsPackages(accountSlug: string, page?: number, limit?: number): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/widgets-packages`, { page, limit });
  }

  getWidgetsPackage(accountSlug: string, packageSlug: string): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/widgets-packages/${packageSlug}`);
  }

  createWidgetsPackage(accountSlug: string, widgetsPackageForm: WidgetsPackageForm): Promise<string> {
    return this.client.post(`/accounts/${accountSlug}/widgets-packages`, { widgets_package: widgetsPackageForm });
  }

  updateWidgetsPackage(accountSlug: string, packageSlug: string, widgetsPackageForm: WidgetsPackageForm): Promise<string> {
    return this.client.put(`/accounts/${accountSlug}/widgets-packages/${packageSlug}`, { widgets_package: widgetsPackageForm });
  }

  deleteWidgetsPackage(accountSlug: string, packageSlug: string): Promise<string> {
    return this.client.delete(`/accounts/${accountSlug}/widgets-packages/${packageSlug}`);
  }

  getWidgets(accountSlug: string, packageSlug: string, page?: number, limit?: number): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/widgets-packages/${packageSlug}/widgets`, { page, limit });
  }

  getWidget(accountSlug: string, packageSlug: string, widgetId: string): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/widgets-packages/${packageSlug}/widgets/${widgetId}`);
  }

  createWidget(accountSlug: string, packageSlug: string, widgetForm: WidgetForm): Promise<string> {
    return this.client.post(`/accounts/${accountSlug}/widgets-packages/${packageSlug}/widgets`, { widget: widgetForm });
  }

  patchWidget(accountSlug: string, packageSlug: string, widgetId: string, widgetPatchForm: WidgetPatchForm): Promise<string> {
    return this.client.patch(`/accounts/${accountSlug}/widgets-packages/${packageSlug}/widgets/${widgetId}`, widgetPatchForm);
  }

  putWidget(accountSlug: string, packageSlug: string, widgetId: string, widgetForm: WidgetForm): Promise<string> {
    return this.client.put(`/accounts/${accountSlug}/widgets-packages/${packageSlug}/widgets/${widgetId}`, { widget: widgetForm });
  }

  deleteWidget(accountSlug: string, packageSlug: string, widgetId: string): Promise<string> {
    return this.client.delete(`/accounts/${accountSlug}/widgets-packages/${packageSlug}/widgets/${widgetId}`);
  }

  getWidgetTranslations(accountSlug: string, packageSlug: string, widgetId: string, page?: number, limit?: number): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/widgets-packages/${packageSlug}/widgets/${widgetId}/translations`, { page, limit });
  }

  getWidgetTranslation(accountSlug: string, packageSlug: string, widgetId: string, locale: string): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/widgets-packages/${packageSlug}/widgets/${widgetId}/translations/${locale}`);
  }

  createWidgetTranslation(accountSlug: string, packageSlug: string, widgetId: string, widgetTranslationForm: WidgetTranslationForm): Promise<string> {
    return this.client.post(`/accounts/${accountSlug}/widgets-packages/${packageSlug}/widgets/${widgetId}/translations`, { widget_translation: widgetTranslationForm });
  }

  patchWidgetTranslation(accountSlug: string, packageSlug: string, widgetId: string, locale: string, widgetTranslationPatchForm: WidgetTranslationPatchForm): Promise<string> {
    return this.client.patch(`/accounts/${accountSlug}/widgets-packages/${packageSlug}/widgets/${widgetId}/translations/${locale}`, widgetTranslationPatchForm);
  }
}