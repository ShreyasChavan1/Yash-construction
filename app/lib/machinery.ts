/**
 * Central machinery list. Label specification as "Capacity / Specification";
 * values such as "3DX" or "Standard" are not capacities.
 * Used by: Machinery page, Home page.
 */

export type Machine = {
  slug: string;
  name: string;
  quantity: number;
  /** Extra wording after the quantity, e.g. "Nos Stone Crusher". */
  unit?: string;
  specification: string;
  image: string;
};

export const machinery: Machine[] = [
  { slug: "excavator", name: "Excavator / Poclain", quantity: 4, specification: "100 M3 / Hour", image: "/images/machinery/excavator.jpg" },
  { slug: "jcb", name: "JCB", quantity: 3, specification: "3DX", image: "/images/machinery/jcb.jpg" },
  { slug: "paver", name: "Paver", quantity: 4, specification: "54.5 BHP", image: "/images/machinery/paver.jpg" },
  { slug: "roller", name: "Roller", quantity: 4, specification: "Standard", image: "/images/machinery/roller.jpg" },
  { slug: "grader", name: "Grader", quantity: 1, specification: "Standard", image: "/images/machinery/grader.jpg" },
  { slug: "dumper", name: "Dumper", quantity: 15, specification: "3 Brass", image: "/images/machinery/dumper.jpg" },
  { slug: "asphalt-plant", name: "Asphalt Plant", quantity: 1, specification: "120 DM", image: "/images/machinery/asphalt-plant.jpg" },
  { slug: "crusher-plant", name: "Crusher Plant", quantity: 4, unit: "Nos Stone Crusher", specification: "24X12 · 16X6 · 42X32 · V-Groove · NVI760 · NRI-1005", image: "/images/machinery/crusher-plant.jpg" },
  { slug: "rmc-plant", name: "RMC Plant", quantity: 1, specification: "30 Cum", image: "/images/machinery/rmc-plant.jpg" },
  { slug: "loader", name: "Loader", quantity: 1, specification: "2021D - Standard", image: "/images/machinery/loader.jpg" },
  { slug: "sand-washing-plant", name: "Sand Washing Plant", quantity: 1, specification: "100 TPH", image: "/images/machinery/sand-washing-plant.jpg" },
  { slug: "water-tanker", name: "Water Tanker", quantity: 2, specification: "4.5 MT", image: "/images/machinery/water-tanker.jpg" },
  { slug: "bitumen-sprayer", name: "Bitumen Sprayer / Bozar", quantity: 4, specification: "8.7 MT · 6 MT · 4.5 MT", image: "/images/machinery/bitumen-sprayer.jpg" },
  { slug: "diesel-tanker", name: "Diesel Tanker", quantity: 1, specification: "Standard", image: "/images/machinery/diesel-tanker.jpg" },
  { slug: "ajax-concrete-machine", name: "Ajax Concrete Machine", quantity: 1, specification: "Standard", image: "/images/machinery/ajax-concrete-machine.jpg" },
  { slug: "trailer", name: "Trailer", quantity: 2, specification: "Standard", image: "/images/machinery/trailer.jpg" },
];

/** 4 -> "04", matching the existing card style. */
export const formatQuantity = (m: Machine) => String(m.quantity).padStart(2, "0");
