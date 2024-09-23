"use client"

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";



export default function Page() {

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([]);

  const smallDate = date?.toLocaleDateString('es-ES', { weekday: "long", day: "numeric", month: "long", year: "numeric" });



  return (
    <div className="flex-col sm:flex-wrap sm:flex sm:flex-row gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"

        // aca desabililtamos los dias de la semana por columna, 0 es domingo y 6 es sabado
        disabled={(date) => date.getDay() === 0 || date.getDay() === 5}
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        disabled={(date) => date > new Date()}
      />
      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={setMultipleDates}
        className="rounded-md border shadow"
      />


      <div>
        <h1 className="text-3xl">Información</h1>
        <div className="border-b"></div>
        <p>{smallDate}</p>
        <p>{multipleDates?.map((date) => date.toLocaleDateString()).join(", ")}</p>
      </div>
    </div>
  );
}