"use client";

import { Athlete } from "@/validators/athleteSchema";
import { ColumnDef } from "@tanstack/react-table";

import { dobColumn } from "./Columns/DobColumn";
import { nameColumn } from "./Columns/NameColumns";
import { genderColumn } from "./Columns/GenderColumn";
import { competitionColumn } from "./Columns/CompetitionColumn";
import { actionsColumn } from "./Columns/ActionsColumn";

export const columns: ColumnDef<Athlete>[] = [
  nameColumn,
  dobColumn,
  genderColumn,
  competitionColumn,
  actionsColumn,
];
