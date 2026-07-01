import test from 'ava';
import { handleInspect, formatInspectOutput } from '../../src/cli/commands/inspect.js';

test('handleInspect finds entities without side effects', (t) => {
  const findings = handleInspect('My email is test@example.com', {});
  t.is(findings.length, 1);
  t.is(findings[0]?.category, 'Email');
});

test('formatInspectOutput formats findings', (t) => {
  const findings = handleInspect('My email is test@example.com', {});
  const output = formatInspectOutput(findings);
  t.true(output.includes('test@example.com'));
  t.true(output.includes('Email_1'));
});

test('formatInspectOutput handles empty findings', (t) => {
  const output = formatInspectOutput([]);
  t.true(output.includes('No sensitive entities detected'));
});

import { setupInspectCommand } from '../../src/cli/commands/inspect.js';
import { Command } from 'commander';

test.serial('inspect command fails when file is unreadable', async (t) => {
  const program = new Command();
  setupInspectCommand(program);

  const originalExit = process.exit;
  const originalError = console.error;
  let exitCode: number | undefined;
  let errorOutput = '';

  process.exit = ((code?: number) => {
    exitCode = code;
  }) as any;
  console.error = (msg: string) => {
    errorOutput += msg;
  };

  await program.parseAsync(['node', 'test', 'inspect', 'non-existent-file-999.txt']);

  process.exit = originalExit;
  console.error = originalError;

  t.is(exitCode, 1);
  t.true(errorOutput.includes('Error reading file'));
});

test.serial('inspect command fails when no stdin is provided', async (t) => {
  const program = new Command();
  setupInspectCommand(program);

  const originalExit = process.exit;
  const originalError = console.error;
  let exitCode: number | undefined;
  let errorOutput = '';

  process.exit = ((code?: number) => {
    exitCode = code;
  }) as any;
  console.error = (msg: string) => {
    errorOutput += msg;
  };

  // Actually, mocking fs.readFileSync doesn't work for ES modules imported elsewhere.
  // We can just pass no stdin by relying on the test environment having closed stdin,
  // or by just calling the action directly, but Commander parse works.

  await program.parseAsync(['node', 'test', 'inspect']);

  process.exit = originalExit;
  console.error = originalError;

  t.is(exitCode, 1);
  t.true(errorOutput.includes('No input provided'));
});
