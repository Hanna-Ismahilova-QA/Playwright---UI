import { test as base } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

export const test = base.extend<{
    accessabilityBuilder: AxeBuilder;
}>({
    accessabilityBuilder: async ({ page }, use) => {
        const accessabilityBuilder = await new AxeBuilder({ page }).withTags(['wcag21a', 'wcag21aa', 'best-practices']);
        await use(accessabilityBuilder);
    },
});

export const expect = base.expect;