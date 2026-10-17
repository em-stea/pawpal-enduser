import {useFormContext, useWatch} from "react-hook-form";
import {RefObject, useEffect, useRef, useState} from "react";
import {useOnClickOutside} from "usehooks-ts";

import {FormVetValues} from "../schemas/vet-schema";
import {fetchPlaceSuggestions, PlaceSuggestion} from "../lib/google-places";
import {PlacesModalityField} from "../data/care-modality";

export const usePlaceAutocomplete = (field: PlacesModalityField) => {
  const {control, setValue} = useFormContext<FormVetValues>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [suggestions, setSuggestions] = useState<PlaceSuggestion[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const fieldName = field.name as keyof FormVetValues;
  const inputValue = (useWatch({control, name: fieldName}) as string | undefined) ?? "";

  useOnClickOutside(containerRef as RefObject<HTMLElement>, () => {
    setIsOpen(false);
    setSuggestions([]);
  });

  useEffect(() => {
    if (!isOpen || inputValue.trim().length < 3) {
      return;
    }

    const controller = new AbortController();
    const timer = setTimeout(() => {
      void fetchPlaceSuggestions(inputValue, controller.signal)
        .then((results) => {
          if (!controller.signal.aborted) {
            setSuggestions(results);
          }
        })
        .catch(() => {
          if (!controller.signal.aborted) {
            setSuggestions([]);
          }
        });
    }, 300);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [inputValue, isOpen]);

  const handleSelect = (item: PlaceSuggestion) => {
    setValue(fieldName, item.text, {shouldValidate: true});
    setIsOpen(false);
    setSuggestions([]);
  };

  const showSuggestions = isOpen && inputValue.trim().length >= 3 && suggestions.length > 0;

  return {
    containerRef,
    suggestions,
    setIsOpen,
    showSuggestions,
    handleSelect,
  };
};
