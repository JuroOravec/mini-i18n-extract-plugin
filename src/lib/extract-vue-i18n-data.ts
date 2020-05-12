/**
 * Extract data from source that came from VueI18n loader
 */
export default function extractVueI18nData(exportsData: any) {
  // dummy object to extract data
  const dummy = { options: { __i18n: null as any } };
  exportsData(dummy);
  const [data] = dummy.options.__i18n || [];
  return data;
}
