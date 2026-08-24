import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/lib/services";
import { formsubmitEndpoint, site } from "@/lib/site";

export function EstimateForm({
  defaultService,
}: {
  defaultService?: string;
}) {
  const nextUrl = `${site.url}/thank-you`;

  return (
    <form
      action={formsubmitEndpoint}
      method="POST"
      className="grid gap-4 sm:grid-cols-2"
    >
      <input type="hidden" name="_next" value={nextUrl} />
      <input
        type="hidden"
        name="_subject"
        value={`New estimate request — ${site.name}`}
      />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input
        type="text"
        name="_honey"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <Field label="First name" htmlFor="firstName">
        <Input
          id="firstName"
          name="firstName"
          required
          autoComplete="given-name"
          className="h-10"
        />
      </Field>
      <Field label="Last name" htmlFor="lastName">
        <Input
          id="lastName"
          name="lastName"
          required
          autoComplete="family-name"
          className="h-10"
        />
      </Field>
      <Field label="Email" htmlFor="email">
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="h-10"
        />
      </Field>
      <Field label="Phone number" htmlFor="phone">
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className="h-10"
        />
      </Field>
      <Field label="Zip code" htmlFor="zip">
        <Input
          id="zip"
          name="zip"
          required
          autoComplete="postal-code"
          className="h-10"
        />
      </Field>
      <Field label="Service" htmlFor="service">
        <select
          id="service"
          name="service"
          required
          defaultValue={defaultService ?? ""}
          className="h-10 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm dark:bg-input/30"
        >
          <option value="" disabled>
            Choose a service
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.formValue}>
              {service.formValue}
            </option>
          ))}
        </select>
      </Field>
      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about the project, storm damage, or the rooms you want to change."
          className="min-h-28"
        />
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" className="h-11 w-full px-6 sm:w-auto">
          Request a free estimate
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
