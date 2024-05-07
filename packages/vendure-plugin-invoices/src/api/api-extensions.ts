import gql from 'graphql-tag';

// This is only used by codegen so it knows DateTime is a custom scalar
const scalars = gql`
  scalar DateTime
`;

const commonSchemaExtensions = gql`
  type Invoice {
    id: ID!
    createdAt: DateTime
    invoiceNumber: Int!
    downloadUrl: String!
    isCreditInvoice: Boolean!
  }

  extend type Order {
    invoices: [Invoice!]!
  }
`;

export const shopSchemaExtensions = gql`
  ${commonSchemaExtensions}
`;

export const adminSchemaExtensions = gql`
  ${commonSchemaExtensions}

  type Invoice implements Node {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    channelId: ID!
    orderId: ID!
    invoiceNumber: Int!
    storageReference: String!
  }

  type InvoiceOrderTotals {
    taxSummaries: [OrderTaxSummary]
    total: Money!
    totalWithTax: Money!
  }

  type InvoiceConfig {
    id: ID!
    enabled: Boolean!
    createCreditInvoices: Boolean!
    templateString: String!
    orderTotals: InvoiceOrderTotals!
  }

  type InvoiceList implements PaginatedList {
    items: [Invoice!]!
    totalItems: Int!
  }

  input InvoiceConfigInput {
    enabled: Boolean!
    createCreditInvoices: Boolean
    templateString: String
  }

  extend type Mutation {
    upsertInvoiceConfig(input: InvoiceConfigInput): InvoiceConfig!
    """
    Generate a new invoice for the given order. Creates a credit invoice if the order already has an invoice.
    """
    createInvoice(orderId: ID!): Invoice!
  }

  extend type Query {
    invoiceConfig: InvoiceConfig
  }
`;
