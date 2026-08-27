import InfoTooltip from '@/components/ui/InfoTooltip'

/**
 * The two pieces of field guidance that appear on every form collecting a
 * service record — the account profile and each create-an-account checkout.
 *
 * Kept in one module rather than restated per form: the Service rule is easy to
 * paraphrase wrong, and a veteran told "choose Civilian" on one form and
 * something else on another will pick the wrong branch.
 */

export function ServiceHelpTooltip({ align }: { align?: 'left' | 'right' }) {
  return (
    <InfoTooltip label="About the Service field" align={align}>
      <ul className="flex flex-col gap-2 list-disc pl-4">
        <li>
          If you are a veteran, choose <strong>Civilian</strong> as your service — you will be
          able to identify your service branch under <strong>Military status</strong>.
        </li>
        <li>
          If you are active-duty, reserve, or retired, choose your <strong>branch of service</strong>.
        </li>
      </ul>
    </InfoTooltip>
  )
}

export function GradYearHelpTooltip({ align }: { align?: 'left' | 'right' }) {
  return (
    <InfoTooltip label="About the Graduation year field" align={align}>
      Applicable only for service academy and NROTC students.
    </InfoTooltip>
  )
}
