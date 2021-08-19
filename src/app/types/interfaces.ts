export type LinkType = 'internal' | 'external';

export interface Link {
  type: LinkType,
  value: string | string[]
}
