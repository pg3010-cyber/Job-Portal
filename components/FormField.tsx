"use client";

import React, { useState } from "react";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller, Control } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

type FormFieldProps = {
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
};

const FormField = ({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="label">{label}</FormLabel>
          <FormControl className="relative">
            <div className="relative">
              <Input
                className="input pr-10"
                type={isPassword && !showPassword ? "password" : "text"}
                placeholder={placeholder}
                {...field}
              />
              {isPassword && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormField;
