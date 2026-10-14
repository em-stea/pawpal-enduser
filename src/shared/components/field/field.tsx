"use client";

import {useMemo} from "react";
import {type VariantProps} from "class-variance-authority";

import {cn} from "@/shared/lib/tw-merge/utils";
import {Text} from "@/shared/components/text/text";

import {
  fieldContentVariants,
  fieldDescriptionVariants,
  fieldErrorListVariants,
  fieldErrorVariants,
  fieldGroupVariants,
  fieldLabelVariants,
  fieldLegendVariants,
  fieldSeparatorContentVariants,
  fieldSeparatorVariants,
  fieldSetVariants,
  fieldTitleVariants,
  fieldVariants,
} from "./field.styles";

function FieldSet({className, ...props}: React.ComponentProps<"fieldset">) {
  return (
    <fieldset className={cn(fieldSetVariants(), className)} data-slot="field-set" {...props} />
  );
}

function FieldLegend({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & {variant?: "legend" | "label"}) {
  return (
    <legend
      className={cn(fieldLegendVariants(), className)}
      data-slot="field-legend"
      data-variant={variant}
      {...props}
    />
  );
}

function FieldGroup({className, ...props}: React.ComponentProps<"div">) {
  return <div className={cn(fieldGroupVariants(), className)} data-slot="field-group" {...props} />;
}

function Field({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      className={cn(fieldVariants({orientation}), className)}
      data-orientation={orientation}
      data-slot="field"
      role="group"
      {...props}
    />
  );
}

function FieldContent({className, ...props}: React.ComponentProps<"div">) {
  return (
    <div className={cn(fieldContentVariants(), className)} data-slot="field-content" {...props} />
  );
}

function FieldLabel({className, ...props}: React.ComponentProps<typeof Text>) {
  return (
    <Text
      as="label"
      className={cn(fieldLabelVariants(), className)}
      data-slot="field-label"
      {...props}
    />
  );
}

function FieldTitle({className, ...props}: React.ComponentProps<"div">) {
  return <div className={cn(fieldTitleVariants(), className)} data-slot="field-label" {...props} />;
}

function FieldDescription({className, ...props}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(fieldDescriptionVariants(), className)}
      data-slot="field-description"
      {...props}
    />
  );
}

function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(fieldSeparatorVariants(), className)}
      data-content={!!children}
      data-slot="field-separator"
      {...props}
    >
      {!!children && (
        <span className={fieldSeparatorContentVariants()} data-slot="field-separator-content">
          {children}
        </span>
      )}
    </div>
  );
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: ({message?: string} | undefined)[];
}) {
  const content = useMemo(() => {
    if (children) {
      return children;
    }

    if (!errors?.length) {
      return null;
    }

    const uniqueErrors = [...new Map(errors.map((error) => [error?.message, error])).values()];

    if (uniqueErrors.length == 1) {
      return uniqueErrors[0]?.message;
    }

    return (
      <ul className={fieldErrorListVariants()}>
        {uniqueErrors.map(
          (error, index) =>
            error?.message && (
              <li key={index} className="text-body-1">
                {error.message}
              </li>
            ),
        )}
      </ul>
    );
  }, [children, errors]);

  if (!content) {
    return null;
  }

  return (
    <div
      className={cn(fieldErrorVariants(), className)}
      data-slot="field-error"
      role="alert"
      {...props}
    >
      {content}
    </div>
  );
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
};
