import { jsonb, pgSchema, timestamp, uuid } from 'drizzle-orm/pg-core';

export type CapabilityEntity = {
  name: string;
  type: string;
};

export const capabilityScheduling = pgSchema('capability-scheduling');

export const capabilityAllocatableCapabilities = capabilityScheduling.table(
  'cap_allocatable_capabilities',
  {
    id: uuid('id').primaryKey(),
    resourceId: uuid('resource_id').notNull(),
    capability: jsonb('capability').$type<CapabilityEntity>().notNull(),
    fromDate: timestamp('from_date').notNull(),
    toDate: timestamp('to_date').notNull(),
  },
);

export type AllocatableCapabilityEntity =
  typeof capabilityAllocatableCapabilities.$inferSelect;
export type NewAllocatableCapabilitysEntity =
  typeof capabilityAllocatableCapabilities.$inferInsert;
