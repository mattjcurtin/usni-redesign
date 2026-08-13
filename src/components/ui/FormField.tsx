import {
  type InputHTMLAttributes,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
  type ReactNode,
} from 'react'

/**
 * Shared form primitives.
 *
 * The design system's Forms page documented an input class recipe with a note
 * that every form was rebuilding it by hand until someone extracted it. This is
 * that extraction — same visual recipe, plus the label/required/help/error
 * scaffolding that the recipe alone didn't cover.
 */

const controlBase =
  'w-full font-body text-base text-navy-bolder border px-3.5 py-3 outline-none bg-white ' +
  'placeholder:text-neutral-subtle transition ' +
  'focus:border-navy-bright focus:shadow-[0_0_0_3px_rgba(4,102,200,0.15)]'

const controlIdle = 'border-[#94A3B8]'
const controlError = 'border-[#c1121f] bg-[#fef6f6]'

export function controlClasses(hasError?: boolean, extra = '') {
  return `${controlBase} ${hasError ? controlError : controlIdle} ${extra}`
}

interface FieldProps {
  label: string
  htmlFor: string
  required?: boolean
  /** Guidance shown under the control. */
  help?: ReactNode
  /** Validation message; when set the control renders in its error state. */
  error?: string
  /** Live counter or similar, shown under the control opposite `help`. */
  hint?: string
  children: ReactNode
  className?: string
}

export function Field({
  label,
  htmlFor,
  required,
  help,
  error,
  hint,
  children,
  className = '',
}: FieldProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={htmlFor} className="font-body font-semibold text-sm text-navy-bolder">
        {label}
        {required && (
          <span className="text-[#c1121f] ml-1" aria-hidden="true">
            *
          </span>
        )}
        {required && <span className="sr-only"> (required)</span>}
      </label>

      {children}

      {(help || hint) && (
        <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">
          {help ? (
            <div className="font-body text-sm text-neutral-subtle leading-relaxed flex-1 min-w-0">
              {help}
            </div>
          ) : (
            <span />
          )}
          {hint && (
            <span className="font-body text-sm text-neutral-subtle flex-shrink-0">{hint}</span>
          )}
        </div>
      )}

      {error && (
        <p role="alert" className="flex items-start gap-1.5 font-body text-sm text-[#c1121f]">
          <i className="fa-solid fa-circle-exclamation mt-0.5 flex-shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & { hasError?: boolean }

export function TextInput({ hasError, className = '', ...props }: TextInputProps) {
  return (
    <input
      {...props}
      aria-invalid={hasError || undefined}
      className={controlClasses(hasError, className)}
    />
  )
}

type SelectInputProps = SelectHTMLAttributes<HTMLSelectElement> & { hasError?: boolean }

export function SelectInput({ hasError, className = '', children, ...props }: SelectInputProps) {
  return (
    <select
      {...props}
      aria-invalid={hasError || undefined}
      // Chevron, spacing and appearance come from the global `select-field` class
      className={controlClasses(hasError, `select-field ${className}`)}
    >
      {children}
    </select>
  )
}

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & { hasError?: boolean }

export function TextArea({ hasError, className = '', ...props }: TextAreaProps) {
  return (
    <textarea
      {...props}
      aria-invalid={hasError || undefined}
      className={controlClasses(hasError, `resize-y min-h-[120px] leading-relaxed ${className}`)}
    />
  )
}

interface CheckboxFieldProps {
  id: string
  checked: boolean
  onChange: (checked: boolean) => void
  required?: boolean
  error?: string
  children: ReactNode
}

export function CheckboxField({
  id,
  checked,
  onChange,
  required,
  error,
  children,
}: CheckboxFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-start gap-3">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={error ? true : undefined}
          className={`mt-0.5 w-5 h-5 flex-shrink-0 cursor-pointer accent-[#0466c8]
            ${error ? 'outline outline-2 outline-[#c1121f]' : ''}`}
        />
        <label htmlFor={id} className="font-body text-base text-navy-bolder leading-relaxed cursor-pointer">
          {children}
          {required && (
            <span className="text-[#c1121f] ml-1" aria-hidden="true">
              *
            </span>
          )}
        </label>
      </div>
      {error && (
        <p role="alert" className="flex items-start gap-1.5 font-body text-sm text-[#c1121f] ml-8">
          <i className="fa-solid fa-circle-exclamation mt-0.5 flex-shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}

/** Grouping wrapper — a titled fieldset with a rule under the legend. */
export function Fieldset({
  legend,
  description,
  children,
  className = '',
}: {
  legend: string
  description?: string
  children: ReactNode
  className?: string
}) {
  return (
    <fieldset className={`flex flex-col gap-5 ${className}`}>
      {/* A <legend> is taken out of the fieldset's flow, so the parent's flex
          `gap` never applies below it — the margin here is what separates the
          rule from the first field's label. */}
      <legend className="w-full mb-6">
        <span className="block font-headline text-2xl lg:text-[28px] text-navy-bolder leading-tight border-b border-navy-subtle pb-4 w-full">
          {legend}
        </span>
        {description && (
          <span className="block font-body text-sm text-neutral-subtle leading-relaxed mt-3">
            {description}
          </span>
        )}
      </legend>
      {children}
    </fieldset>
  )
}
