import { useEffect, useRef, useState } from "react";

const KOMMO_SCRIPT_ID = "amoforms_script_1716799";
const KOMMO_SCRIPT_SRC =
  "https://forms.kommo.com/forms/assets/js/amoforms.js?1782831391";
const KOMMO_FORM_CONTAINER_ID = "kommo-form-comercial";
const KOMMO_BOOTSTRAP_CODE = `
  !function(a,m,o,c,r,m){
    a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},
    a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},
    a[o+r]({id:"1716799",hash:"12e56dabf45ffe8d631ef270095149cc",locale:"pt"}),
    a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}
  }(window,0,"amo_forms_","params","load","loaded");
`;

export default function KommoDiagnosisForm() {
  const embedRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const embedElement = embedRef.current;
    if (!embedElement) return;

    embedElement.innerHTML = "";

    const formContainer = document.createElement("div");
    formContainer.id = KOMMO_FORM_CONTAINER_ID;

    const bootstrapScript = document.createElement("script");
    bootstrapScript.text = KOMMO_BOOTSTRAP_CODE;

    const oldScript = document.getElementById(KOMMO_SCRIPT_ID);
    oldScript?.remove();

    const script = document.createElement("script");
    script.id = KOMMO_SCRIPT_ID;
    script.async = true;
    script.charset = "utf-8";
    script.src = KOMMO_SCRIPT_SRC;
    script.onload = () => setIsLoading(false);
    script.onerror = () => setIsLoading(false);

    embedElement.appendChild(formContainer);
    embedElement.appendChild(bootstrapScript);
    embedElement.appendChild(script);

    const fallbackTimer = window.setTimeout(() => setIsLoading(false), 4_000);

    return () => {
      window.clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div className="relative min-h-[620px]">
      {isLoading && (
        <div className="absolute inset-x-0 top-8 z-[1] text-center text-sm text-terra-navy/60">
          Carregando formulário...
        </div>
      )}

      <div ref={embedRef} className="relative z-[2] min-h-[620px]" />
    </div>
  );
}
