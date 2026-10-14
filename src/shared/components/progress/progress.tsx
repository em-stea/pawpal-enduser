"use client";

import {Progress as ProgressPrimitive} from "@base-ui/react/progress";

import {cn} from "@/shared/lib/tw-merge/utils";

import {
  progressIndicatorVariants,
  progressLabelVariants,
  progressTrackVariants,
  progressValueVariants,
  progressVariants,
} from "./progress.styles";

function Progress({className, children, value, ...props}: ProgressPrimitive.Root.Props) {
  return (
    <ProgressPrimitive.Root
      className={cn(progressVariants(), className)}
      data-slot="progress"
      value={value}
      {...props}
    >
      {children}
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressPrimitive.Root>
  );
}

function ProgressTrack({className, ...props}: ProgressPrimitive.Track.Props) {
  return (
    <ProgressPrimitive.Track
      className={cn(progressTrackVariants(), className)}
      data-slot="progress-track"
      {...props}
    />
  );
}

function ProgressIndicator({className, ...props}: ProgressPrimitive.Indicator.Props) {
  return (
    <ProgressPrimitive.Indicator
      className={cn(progressIndicatorVariants(), className)}
      data-slot="progress-indicator"
      {...props}
    />
  );
}

function ProgressLabel({className, ...props}: ProgressPrimitive.Label.Props) {
  return (
    <ProgressPrimitive.Label
      className={cn(progressLabelVariants(), className)}
      data-slot="progress-label"
      {...props}
    />
  );
}

function ProgressValue({className, ...props}: ProgressPrimitive.Value.Props) {
  return (
    <ProgressPrimitive.Value
      className={cn(progressValueVariants(), className)}
      data-slot="progress-value"
      {...props}
    />
  );
}

export {Progress, ProgressTrack, ProgressIndicator, ProgressLabel, ProgressValue};
