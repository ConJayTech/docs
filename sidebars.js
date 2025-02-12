/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'IQM API',
      className: 'sidebarCategory'
    },
    {
      type: 'category',
      label: 'Getting Started',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Getting Started/index'
      },
      items: [
        {
          type: 'doc',
          id: 'Getting Started/Platform-overview',
          label: 'IQM Platform Overview',
          className: 'sidebarItem',
        },
        {
          type: 'doc',
          id: 'Getting Started/REST-API-Reference',
          label: 'REST API Overview',
          className: 'sidebarItem',
        },
        {
          type: 'doc',
          id: 'Getting Started/Before-You-Begin',
          label: 'Getting Started',
          className: 'sidebarItem',
        },
        {
          type: 'doc',
          id: 'Getting Started/Typescript-Prerequisites',
          label: 'TypeScript Prerequisites',
          className: 'sidebarItem',
        },
      ],
    },
    {
      type: "category",
      label: 'Quickstart Guides',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Quickstart Guides/index'
      },
      items: [
        {
          type: 'category',
          label: 'Sign Up and Authenticate',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'Quickstart Guides/Authentication-Quickstart-Guide'
          },
          items: [
            {
              type: `link`,
              label: 'Sign Up',
              href: `/docs/Quickstart%20Guides/Authentication-Quickstart-Guide#sign-up`,
              className: 'sidebarItem'
            },
            {
              type: `link`,
              label: 'Log In',
              href: `/docs/Quickstart%20Guides/Authentication-Quickstart-Guide#log-in`,
              className: 'sidebarItem'
            },
            {
              type: `link`,
              label: 'Refresh Token',
              href: `/docs/Quickstart%20Guides/Authentication-Quickstart-Guide#refresh-token`,
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: 'category',
          label: 'Upload a Matched Audience',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'Quickstart Guides/Matched-Audience-Upload-API-Quickstart-Guide'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Matched Audience',
              href: `/docs/Quickstart%20Guides/Matched-Audience-Upload-API-Quickstart-Guide#about-iqm-matched-audience`,
              className: 'sidebarItem'
            },
            {
              type: `link`,
              label: 'Before You Begin',
              href: `/docs/Quickstart%20Guides/Matched-Audience-Upload-API-Quickstart-Guide#before-you-begin`,
              className: 'sidebarItem'
            },
            {
              type: `link`,
              label: 'Upload Matched Audience Using the IQM API',
              href: `/docs/Quickstart%20Guides/Matched-Audience-Upload-API-Quickstart-Guide#upload-matched-audience-using-the-iqm-api`,
              className: 'sidebarItem'
            },
            {
              type: `link`,
              label: 'Step 1: Log In',
              href: `/docs/Quickstart%20Guides/Matched-Audience-Upload-API-Quickstart-Guide#step-1-log-in`,
              className: 'sidebarItem'
            },
            {
              type: `link`,
              label: 'Step 2: Request Column List',
              href: `/docs/Quickstart%20Guides/Matched-Audience-Upload-API-Quickstart-Guide#step-2-request-column-list`,
              className: 'sidebarItem'
            },
            {
              type: `link`,
              label: 'Step 3: Upload Matched Audience',
              href: `/docs/Quickstart%20Guides/Matched-Audience-Upload-API-Quickstart-Guide#step-3-upload-matched-audience`,
              className: 'sidebarItem'
            },
            {
              type: `link`,
              label: 'Step 4: Check Audience Status',
              href: `/docs/Quickstart%20Guides/Matched-Audience-Upload-API-Quickstart-Guide#step-4-check-audience-status`,
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: 'category',
          label: 'Create a Campaign',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'Quickstart Guides/Upload-Creative-and-Create-a-Campaign-API-Quickstart-Guide'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Campaign & Creative',
              href: `/docs/Quickstart%20Guides/Upload-Creative-and-Create-a-Campaign-API-Quickstart-Guide#about-iqm-campaign--creative`,
              className: 'sidebarItem'
            },
            {
              type: `link`,
              label: 'Before You Begin',
              href: `/docs/Quickstart%20Guides/Upload-Creative-and-Create-a-Campaign-API-Quickstart-Guide#before-you-begin`,
              className: 'sidebarItem'
            },
            {
              type: `link`,
              label: 'Upload Creative and Create a Campaign Using the IQM API',
              href: `/docs/Quickstart%20Guides/Upload-Creative-and-Create-a-Campaign-API-Quickstart-Guide#upload-creative-and-create-a-campaign-using-the-iqm-api`,
              className: 'sidebarItem'
            },
            {
              type: `link`,
              label: 'Step 1: Log in',
              href: `/docs/Quickstart%20Guides/Upload-Creative-and-Create-a-Campaign-API-Quickstart-Guide#step-1-log-in`,
              className: 'sidebarItem'
            },
            {
              type: `link`,
              label: 'Step 2: Upload Creative',
              href: `/docs/Quickstart%20Guides/Upload-Creative-and-Create-a-Campaign-API-Quickstart-Guide#step-2-upload-creative`,
              className: 'sidebarItem'
            },
            {
              type: `link`,
              label: 'Step 3: Create Insertion Order',
              href: `/docs/Quickstart%20Guides/Upload-Creative-and-Create-a-Campaign-API-Quickstart-Guide#step-3-create-insertion-order`,
              className: 'sidebarItem'
            },
            {
              type: `link`,
              label: 'Step 4: Create PG Deal',
              href: `/docs/Quickstart%20Guides/Upload-Creative-and-Create-a-Campaign-API-Quickstart-Guide#step-4-create-pg-deal`,
              className: 'sidebarItem'
            },
            {
              type: `link`,
              label: 'Step 5: Create a Campaign',
              href: `/docs/Quickstart%20Guides/Upload-Creative-and-Create-a-Campaign-API-Quickstart-Guide#step-5-create-a-campaign`,
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: 'category',
          label: 'Run a Report',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'Quickstart Guides/Reporting-API-Quickstart-Guide'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Reports',
              href: `/docs/Quickstart%20Guides/Reporting-API-Quickstart-Guide#about-iqm-reports`,
              className: 'sidebarItem'
            },
            {
              type: `link`,
              label: 'Run a Report Using the IQM API',
              href: `/docs/Quickstart%20Guides/Reporting-API-Quickstart-Guide#run-a-report-using-the-iqm-api`,
              className: 'sidebarItem'
            },
            {
              type: `link`,
              label: 'Step 1: Log In',
              href: `/docs/Quickstart%20Guides/Reporting-API-Quickstart-Guide#step-1-log-in`,
              className: 'sidebarItem'
            },
            {
              type: `link`,
              label: 'Step 2: Request Dimensions and Metrics',
              href: `/docs/Quickstart%20Guides/Reporting-API-Quickstart-Guide#step-2-request-dimensions-and-metrics`,
              className: 'sidebarItem'
            },
            {
              type: `link`,
              label: 'Step 3: Select Timezones',
              href: `/docs/Quickstart%20Guides/Reporting-API-Quickstart-Guide#step-3-select-timezones`,
              className: 'sidebarItem'
            },
            {
              type: `link`,
              label: 'Step 4: Execute a Report',
              href: `/docs/Quickstart%20Guides/Reporting-API-Quickstart-Guide#step-4-execute-a-report`,
              className: 'sidebarItem'
            },
            {
              type: `link`,
              label: 'FAQ',
              href: `/docs/Quickstart%20Guides/Reporting-API-Quickstart-Guide#faq`,
              className: 'sidebarItem'
            },
          ]
        },
        {
          type: 'category',
          label: 'Schedule a Report',
          className: 'sidebarItem',
          link: {
            type: 'doc',
            id: 'Quickstart Guides/Schedule-Report-API-Quickstart-Guide'
          },
          items: [
            {
              type: `link`,
              label: 'About IQM Reports',
              href: `/docs/Quickstart%20Guides/Schedule-Report-API-Quickstart-Guide#about-iqm-reports`,
              className: 'sidebarItem'
            },
            {
              type: `link`,
              label: 'Schedule a Report',
              href: `/docs/Quickstart%20Guides/Schedule-Report-API-Quickstart-Guide#schedule-a-report`,
              className: 'sidebarItem'
            },
            {
              type: `link`,
              label: 'Step 1: Log In',
              href: `/docs/Quickstart%20Guides/Schedule-Report-API-Quickstart-Guide#step-1-log-in`,
              className: 'sidebarItem'
            },
            {
              type: `link`,
              label: 'Step 2: Schedule a Report',
              href: `/docs/Quickstart%20Guides/Schedule-Report-API-Quickstart-Guide#step-2-schedule-a-report`,
              className: 'sidebarItem'
            },
          ]
        },
      ],
    },
    {
      type: "category",
      label: 'Tutorials',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Tutorials/index'
      },
      items: [
        {
          type: 'category',
          label: 'Trade Desk Migration',
          className: 'sidebarItem',
          items: [
            {
              type: `doc`,
              label: 'Overview',
              id: `Tutorials/Trade Desk Migration/Overview`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Campaigns',
              id: `Tutorials/Trade Desk Migration/Campaign-Migration-Guide`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Reports',
              id: `Tutorials/Trade Desk Migration/Reports-Migration-Guide`,
              className: 'sidebarItem'
            },
            {
              type: `doc`,
              label: 'Bid Model',
              id: `Tutorials/Trade Desk Migration/Bid-Model-Migration-Guide`,
              className: 'sidebarItem'
            },
          ]
        }
      ]
    },
    {
      type: `doc`,
      label: `API Guidelines`,
      id: `Guidelines/index`,
      className: `sidebarCategory`,
    },
    {
      type: 'category',
      label: 'Assets API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/Assets-API-Guidelines'
      },
      items: [
        {
          type: 'category',
          label: 'Assets Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Assets-API-Guidelines#get-a-list-of-all-assets"><span class="badge bar badge--primary">GET</span>List of All Assets</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Assets-API-Guidelines#get-asset-details"><span class="badge bar badge--primary">GET</span>Asset Details</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Assets Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Assets-API-Guidelines#add-multiple-assets"><span class="badge bar badge--success">POST</span>Add Multiple Assets</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Assets-API-Guidelines#update-asset-details"><span class="badge bar badge--info">PATCH</span>Update Asset Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Assets-API-Guidelines#delete-asset"><span class="badge bar badge--danger">DEL</span>Delete Asset</a>',
              defaultStyle: true,
            },
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Bid Model API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/Bid-Model-API-Guidelines'
      },
      items: [
        {
          type: 'link',
          label: 'Overview',
          href: '/docs/Guidelines/Bid-Model-API-Guidelines#overview',
          className: 'sidebarItem'
        },
        {
          type: 'category',
          label: 'Bid Model Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Bid-Model-API-Guidelines#get-campaign-dimension-counts"><span class="badge bar badge--primary">GET</span>Campaign Dimension Counts</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Bid-Model-API-Guidelines#get-dimension-specific-spending-for-a-campaign"><span class="badge bar badge--primary">GET</span>Campaign Spending by Dimension</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Bid-Model-API-Guidelines#get-total-and-dimension-specific-count-of-modeled-items-for-a-campaign"><span class="badge bar badge--primary">GET</span>Campaign Modelled Items Count</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Include/Exclude Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Bid-Model-API-Guidelines#includeexclude-management"><span class="badge bar badge--success">POST</span>Devices, Exchanges, Traffic</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Bid-Model-API-Guidelines#includeexclude-entities-from-a-campaign"><span class="badge bar badge--success">POST</span>Campaign Entities</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Campaign Priority Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Bid-Model-API-Guidelines#assign-priority-to-multiple-campaigns"><span class="badge bar badge--warning">PUT</span>Assign Priority to Multiple Campaigns</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Bid-Model-API-Guidelines#more-priority-management-for-multiple-campaigns"><span class="badge bar badge--success">POST</span>Priority Management for Multiple Campaigns</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Bid Model Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Bid-Model-API-Guidelines#add-bid-modeling"><span class="badge bar badge--success">POST</span>Add Bid Modeling</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Bid-Model-API-Guidelines#update-bid-modeling-actions"><span class="badge bar badge--warning">PUT</span>Update Bid Modeling Actions</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Bid-Model-API-Guidelines#update-bid-modeling-dimensions"><span class="badge bar badge--info">PATCH</span>Update Bid Modeling Dimensions</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Bid-Model-API-Guidelines#delete-bid-modeling-data"><span class="badge bar badge--danger">DEL</span>Delete Bid Modeling Data</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Bid Model Metrics and Dimensions`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Bid-Model-API-Guidelines#get-metrics-report-for-a-given-campaign-and-dimension"><span class="badge bar badge--success">POST</span>Metrics Report for a Given Campaign & Dimension</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Bid-Model-API-Guidelines#get-list-of-bid-model-dimensions"><span class="badge bar badge--primary">GET</span>List of Bid Model Dimensions</a>',
              defaultStyle: true,
            },
          ],
        },
      ]
    },
    {
      type: 'category',
      label: 'Campaign API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/Campaign-API-Guidelines'
      },
      items: [
        {
          type: 'link',
          label: 'Overview',
          href: '/docs/Guidelines/Campaign-API-Guidelines#overview',
          className: 'sidebarItem'
        },
        {
          type: 'category',
          label: 'Campaign Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#campaign-resource-properties"><span class="badge bar badge--primary"></span>Campaign Resource Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#get-campaign-details-by-id"><span class="badge bar badge--primary">GET</span>Campaign Details by ID</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#get-list-of-campaigns"><span class="badge bar badge--primary">GET</span>List of Campaigns</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#get-list-of-campaigns-with-basic-details"><span class="badge bar badge--primary">GET</span>List of Campaigns with Basic Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#get-basic-details-of-campaigns"><span class="badge bar badge--success">POST</span>Basic Details of Campaigns</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#get-list-of-campaigns-with-filters"><span class="badge bar badge--success">POST</span>List of Campaigns with Filters</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#get-campaign-budget-details"><span class="badge bar badge--primary">GET</span>Campaign Budget Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#get-list-of-campaign-groups"><span class="badge bar badge--success">POST</span>List of Campaign Groups</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#get-campaign-count-by-status"><span class="badge bar badge--success">POST</span>Campaign Count by Status</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#get-campaign-count-with-campaign-type"><span class="badge bar badge--success">POST</span>Campaign Count with Type</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#get-campaign-count-by-creative-type"><span class="badge bar badge--primary">GET</span>Campaign Count by Creative Type</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#get-creative-type-and-campaigns-count"><span class="badge bar badge--success">POST</span>Creative Type and Campaign Count</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#get-campaign-start-date"><span class="badge bar badge--primary">GET</span>Campaign Start Date</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#get-campaign-start-date"><span class="badge bar badge--success">POST</span>List of Campaign Start/End Dates</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#get-campaign-report-data"><span class="badge bar badge--primary">GET</span>Campaign Report Data</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Campaign Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#create-new-pg-campaign"><span class="badge bar badge--success">POST</span>Create New PG Campaign</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#update-pg-campaign"><span class="badge bar badge--info">PATCH</span>Update PG Campaign</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#update-campaign-by-field"><span class="badge bar badge--info">PATCH</span>Update Campaign by Field</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#change-campaign-name"><span class="badge bar badge--info">PATCH</span>Change Campaign Name</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#change-campaign-end-date"><span class="badge bar badge--warning">PUT</span>Change Campaign End Date</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#change-campaign-budget"><span class="badge bar badge--warning">PUT</span>Change Campaign Budget</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#target-campaigns-with-conversions"><span class="badge bar badge--success">POST</span>Target Campaign with Conversions</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#update-audience-targeting-in-campaigns"><span class="badge bar badge--success">POST</span>Update Audience Targeting in Campaign</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#assign-pmp-deals"><span class="badge bar badge--info">PATCH</span>Assign PMP Deals</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#assign-pg-deals"><span class="badge bar badge--info">PATCH</span>Assign PG Deals</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#resend-email-to-set-margin"><span class="badge bar badge--success">POST</span>Resend Email to Set Margin</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#resend-email-reminder-to-set-invoice-template"><span class="badge bar badge--success">POST</span>Resend Email Reminder to Set Invoice Template</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Insertion Order Details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#insertion-order-resource-properties"><span class="badge bar badge--primary"></span>IO Resource Properties</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#get-insertion-order-details"><span class="badge bar badge--success">POST</span>IO Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#get-advanced-insertion-order-details"><span class="badge bar badge--primary">GET</span>Advanced IO Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#get-io-campaign-budget-and-details"><span class="badge bar badge--primary">GET</span>Get IO Campaign Budget and Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#get-list-of-campaign-details-grouped-by-insertion-order-id"><span class="badge bar badge--success">POST</span>List of Campaign Details Grouped by IO ID</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#get-list-of-campaign-details-grouped-by-io-id-with-filters"><span class="badge bar badge--success">POST</span>List of Campaign Details Grouped by IO ID with Filters</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#get-list-of-campaigns-and-report-details-by-insertion-order-id"><span class="badge bar badge--success">POST</span> List of Campaigns and Report Details by IO ID</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#download-csvxlsx-file-for-io-based-campaign-details"><span class="badge bar badge--success">POST</span>Download csv/xlsx File for IO-based Campaign Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#get-list-of-io-startend-dates"><span class="badge bar badge--success">POST</span>List of IO Start/End Dates</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Insertion Order Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#create-an-insertion-order"><span class="badge bar badge--success">POST</span>Create an Insertion Order</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#update-insertion-order-details"><span class="badge bar badge--info">PATCH</span>Update Insertion Order Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#update-end-date-for-multiple-ios"><span class="badge bar badge--info">PATCH</span>Update End Date for Multiple IOs</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#update-budget-for-multiple-ios"><span class="badge bar badge--info">PATCH</span>Update Budget for Multiple IOs</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#duplicate-an-insertion-order"><span class="badge bar badge--success">POST</span>Duplicate an Insertion Order</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#delete-an-insertion-order"><span class="badge bar badge--danger">DEL</span>Delete an Insertion Order</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Get More Details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#get-io-status-list"><span class="badge bar badge--primary">GET</span>List of IO Status</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#get-list-of-campaign-budget-types"><span class="badge bar badge--primary">GET</span>List of Campaign Budget Types</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Campaign-API-Guidelines#get-list-of-budget-distribution-methods"><span class="badge bar badge--primary">GET</span>List of Budget Distribution Methods</a>',
              defaultStyle: true,
            },
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Conversions API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/Conversion-API-Guidelines'
      },
      items: [
        {
          type: 'link',
          label: 'Overview',
          href: '/docs/Guidelines/Conversion-API-Guidelines#overview',
          className: 'sidebarItem'
        },
        {
          type: 'category',
          label: 'Conversion Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Conversion-API-Guidelines#postback-conversion-resource-properties"><span class="badge bar badge--primary"></span>Postback Conversion Resource Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Conversion-API-Guidelines#pixel-conversion-resource-properties"><span class="badge bar badge--primary"></span>Pixel Conversion Resource Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Conversion-API-Guidelines#get-conversion-details-by-id"><span class="badge bar badge--primary">GET</span>Conversion Details by ID</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Conversion-API-Guidelines#get-list-of-conversions"><span class="badge bar badge--primary">GET</span>List of Conversions</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Conversion-API-Guidelines#get-conversion-count-by-type"><span class="badge bar badge--primary">GET</span>Conversion Count by Type</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Conversion-API-Guidelines#get-campaign-details-by-conversion-id"><span class="badge bar badge--primary">GET</span>Campaign Details by Conversion ID</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Conversion-API-Guidelines#get-campaign-details-by-conversion-id-in-group-or-basic"><span class="badge bar badge--primary">GET</span>Campaign Details by Conversion ID in Group or Basic</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Conversions Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Conversion-API-Guidelines#create-postback-conversion"><span class="badge bar badge--success">POST</span>Create Postback Conversion</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Conversion-API-Guidelines#create-pixel-conversion"><span class="badge bar badge--success">POST</span>Create Pixel Conversion</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Conversion-API-Guidelines#delete-conversion"><span class="badge bar badge--danger">DEL</span>Delete Conversion</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Conversion-API-Guidelines#update-postback-conversion"><span class="badge bar badge--info">PATCH</span>Update Postback Conversion</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Conversion-API-Guidelines#update-pixel-conversion"><span class="badge bar badge--info">PATCH</span>Update Pixel Conversion</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Conversion-API-Guidelines#assign-conversion-to-a-campaign"><span class="badge bar badge--info">PATCH</span>Assign Conversion to a Campaign</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Conversion-API-Guidelines#send-email-for-pixel-integration"><span class="badge bar badge--success">POST</span>Send Email for Pixel Integration</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `More Conversion Details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Conversion-API-Guidelines#get-list-of-partner-types-for-postback-conversions"><span class="badge bar badge--primary">GET</span>List of Partner Types for Postback Conversions</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Conversion-API-Guidelines#get-list-of-pixel-conversion-advanced-setting-default-values"><span class="badge bar badge--primary">GET</span>List of Pixel Conversion Advanced Setting Default Values</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Conversion-API-Guidelines#get-list-of-conversion-types"><span class="badge bar badge--primary">GET</span>List of Conversion Types</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Conversion-API-Guidelines#get-list-of-conversion-status"><span class="badge bar badge--primary">GET</span>List of Conversion Status</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Conversion-API-Guidelines#get-list-of-conversion-piggyback-types"><span class="badge bar badge--primary">GET</span>List of Conversion Piggyback Types</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Conversion-API-Guidelines#get-list-of-conversion-attribute-types"><span class="badge bar badge--primary">GET</span>List of Conversion Attribute Types</a>',
              defaultStyle: true,
            },
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Creative API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/Creative-API-Guidelines'
      },
      items: [
        {
          type: 'link',
          label: 'Overview',
          href: '/docs/Guidelines/Creative-API-Guidelines#overview',
          className: 'sidebarItem'
        },
        {
          type: 'category',
          label: 'Creative Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Creative-API-Guidelines#creative-details-by-id"><span class="badge bar badge--primary">GET</span>Creative Details by ID</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Creative-API-Guidelines#get-list-of-creatives-and-details"><span class="badge bar badge--success">POST</span>List of Creatives and Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Creative-API-Guidelines#get-associated-campaigns"><span class="badge bar badge--primary">GET</span>Associated Campaigns</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Creative-API-Guidelines#get-list-of-creative-groups"><span class="badge bar badge--success">POST</span>List of Creative Groups</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Creative-API-Guidelines#get-creative-count-by-type"><span class="badge bar badge--success">POST</span>Creative Count by Type</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Creative-API-Guidelines#get-creative-count-by-status"><span class="badge bar badge--success">POST</span>Creative Count by Status</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: 'category',
          label: 'Creative Management',
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Creative-API-Guidelines#add-new-creative"><span class="badge bar badge--success">POST</span>Add New Creative</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Creative-API-Guidelines#update-creative-details"><span class="badge bar badge--info">PATCH</span>Update Creative Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Creative-API-Guidelines#update-creative-status"><span class="badge bar badge--info">PATCH</span>Update Creative Status</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Creative-API-Guidelines#create-new-creative-group"><span class="badge bar badge--success">POST</span>Create New Creative Group</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Creative-API-Guidelines#delete-creative-group"><span class="badge bar badge--danger">DEL</span>Delete Creative Group</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Creative-API-Guidelines#modify-creatives"><span class="badge bar badge--success">POST</span>Modify Creatives</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Creative-API-Guidelines#update-creative-group-name"><span class="badge bar badge--info">PATCH</span>Update Creative Group Name</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Creative-API-Guidelines#duplicate-creatives"><span class="badge bar badge--success">POST</span>Duplicate Creatives</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Creative-API-Guidelines#duplicate-creative-group"><span class="badge bar badge--success">POST</span>Duplicate Creative Group Name</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Creative-API-Guidelines#compress-uploaded-image-creative"><span class="badge bar badge--success">POST</span>Compress Image</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Creative-API-Guidelines#update-pixel-url"><span class="badge bar badge--info">PATCH</span>Update Pixel URL</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Creative-API-Guidelines#update-click-url"><span class="badge bar badge--info">PATCH</span>Update Click URL</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: 'category',
          label: 'More Creative Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Creative-API-Guidelines#get-creative-types-list"><span class="badge bar badge--primary">GET</span>Creative Types List</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Creative-API-Guidelines#get-creative-status-list"><span class="badge bar badge--primary">GET</span>Creative Status List</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Creative-API-Guidelines#get-cta-details"><span class="badge bar badge--primary">GET</span>CTA Details</a>',
              defaultStyle: true,
            },
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Finance API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/Finance-Guidelines'
      },
      items: [
        {
          type: 'link',
          label: 'Overview',
          href: '/docs/Guidelines/Finance-Guidelines#overview',
          className: 'sidebarItem'
        },
        {
          type: 'category',
          label: 'Finance Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#finance-details"><span class="badge bar badge--primary">GET</span>Customer Finance Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#get-list-of-payment-transactions-for-organization"><span class="badge bar badge--primary">GET</span>List of Payment Transactions for Organization</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#get-list-of-customer-payments"><span class="badge bar badge--primary">GET</span>List of Customer Payments</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#get-invoice-for-organization"><span class="badge bar badge--primary">GET</span>Invoice for Organization</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#get-invoice-payment-details"><span class="badge bar badge--primary">GET</span>Invoice Payment Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#get-list-of-invoices-for-customer-or-organization"><span class="badge bar badge--primary">GET</span>List of Invoices for Customer or Organization</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#get-customer-margin-details"><span class="badge bar badge--primary">GET</span>Customer Margin Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#update-customer-margin-details"><span class="badge bar badge--success">POST</span>Update Customer Margin Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#get-customer-pg-fees-details"><span class="badge bar badge--primary">GET</span>Customer PG Fees Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="#edit-customer-pg-fees"><span class="badge bar badge--info">PATCH</span>Edit Customer PG Fees</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#get-customer-vld-finance-details"><span class="badge bar badge--primary">GET</span>Customer VLD Finance Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#updates-customer-vld-details"><span class="badge bar badge--info">PATCH</span>Updates Customer VLD Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#get-basic-financial-details"><span class="badge bar badge--primary">GET</span>Basic Financial Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#available-balance"><span class="badge bar badge--primary">GET</span>Available Balance</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#credit-summary"><span class="badge bar badge--primary">GET</span>Credit Summary</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#offered-credits"><span class="badge bar badge--primary">GET</span>Offered Credits</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#download-invoice"><span class="badge bar badge--primary">GET</span>Download Invoice</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#download-payment-receipt"><span class="badge bar badge--primary">GET</span>Download Payment Receipt</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Invoice Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#invoice-management"><span class="badge bar badge--info">PATCH</span>Update Invoice Settings</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#delete-invoice-tax-data"><span class="badge bar badge--danger">DEL</span>Delete Invoice Tax Data</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#approve-invoice"><span class="badge bar badge--info">PATCH</span>Approve Invoice</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#cancel-invoice"><span class="badge bar badge--info">PATCH</span>Cancel Invoice</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#mark-invoice-as-paid"><span class="badge bar badge--success">POST</span>Mark Invoice as Paid</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#email-invoice"><span class="badge bar badge--success">POST</span>Email Invoice</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Credit Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#credit-management"><span class="badge bar badge--success">POST</span>Add Credit to Customer</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#update-credit-offered-to-customer"><span class="badge bar badge--info">PATCH</span>Update Credit Offered to Customer</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#revoke-credit-offered-to-customer"><span class="badge bar badge--success">POST</span>Revoke Credit Offered to Customer</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#claim-offered-credits"><span class="badge bar badge--success">POST</span>Claim Offered Credits</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Payment Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#payment-management"><span class="badge bar badge--success">POST</span>Add Payment for Customer</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#edit-customer-payment"><span class="badge bar badge--warning">PUT</span>Edit Customer Payment</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#approve-payment"><span class="badge bar badge--success">POST</span>Approve Payment</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#cancel-payment"><span class="badge bar badge--success">POST</span>Cancel Payment</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#reject-payment"><span class="badge bar badge--success">POST</span>Reject Payment</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#add-payment-from-organization-app"><span class="badge bar badge--success">POST</span>Add Payment from Organization App</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#payment-with-paypal"><span class="badge bar badge--success">POST</span>Payment with PayPal</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#initiate-refund"><span class="badge bar badge--success">POST</span>Initiate Refund</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#approve-refund"><span class="badge bar badge--success">POST</span>Approve Refund</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#email-payment-receipt"><span class="badge bar badge--success">POST</span>Email Payment Receipt</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Static Details Lists`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#static-details-lists"><span class="badge bar badge--primary">GET</span>Payment Types</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#payment-status"><span class="badge bar badge--primary">GET</span>Payment Status</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#invoice-payment-mode-types"><span class="badge bar badge--primary">GET</span>Invoice Payment Mode Types</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#invoice-status"><span class="badge bar badge--primary">GET</span>Invoice Status</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#invoice-payment-term"><span class="badge bar badge--primary">GET</span>Invoice Payment Term</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Finance-Guidelines#pg-payment-type"><span class="badge bar badge--primary">GET</span>PG Payment Type</a>',
              defaultStyle: true,
            },
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Insights API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/Insights-API-Guidelines'
      },
      items: [
        {
          type: 'link',
          label: 'Overview',
          href: '/docs/Guidelines/Insights-API-Guidelines#overview',
          className: 'sidebarItem'
        },
        {
          type: 'category',
          label: 'Insights Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Insights-API-Guidelines#get-insights-details"><span class="badge bar badge--primary">GET</span>List of Insights</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Insights-API-Guidelines#get-campaign-bidding-insights"><span class="badge bar badge--primary">GET</span>Campaign Bidding Insights</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Insights-API-Guidelines#get-a-list-of-eligible-audiences"><span class="badge bar badge--primary">GET</span>List of Eligible Audiences</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Insights-API-Guidelines#get-insights-count-by-type"><span class="badge bar badge--primary">GET</span>Insights Count by Type</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Insights-API-Guidelines#get-matched-audience-details"><span class="badge bar badge--primary">GET</span>Matched Audience Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Insights-API-Guidelines#get-matched-audience-file-url"><span class="badge bar badge--primary">GET</span>Matched Audience File URL</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Insights Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Insights-API-Guidelines#insights-management"><span class="badge bar badge--success">POST</span>Create Insights for a Given Audience</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Insights-API-Guidelines#delete-insights-record"><span class="badge bar badge--danger">DEL</span>Delete Insights Record</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Insights-API-Guidelines#regenerate-insights-report"><span class="badge bar badge--success">POST</span>Regenerate Insights Report</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Insights-API-Guidelines#download-insights-report"><span class="badge bar badge--success">POST</span>Download Insights Report</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Insights-API-Guidelines#send-insights-email"><span class="badge bar badge--success">POST</span>Send Insights Email</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Voter Level Data Reports`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Insights-API-Guidelines#voter-level-data-reports"><span class="badge bar badge--primary"></span>VLD Resource Properties</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Insights-API-Guidelines#get-list-of-vld-reports"><span class="badge bar badge--primary">GET</span>List of VLD Reports</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Insights-API-Guidelines#get-list-of-campaigns-eligible-for-vld-reports"><span class="badge bar badge--primary">GET</span>List of Campaigns Eligible for VLD Reports</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Insights-API-Guidelines#generate-vld-report"><span class="badge bar badge--success">POST</span>Generate VLD Report</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Insights-API-Guidelines#get-cost-assessment-for-vld-report"><span class="badge bar badge--success">POST</span>Cost Assessment for VLD Report</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Insights-API-Guidelines#download-vld-insight-report"><span class="badge bar badge--success">POST</span>Download VLD Insight Report</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Insights-API-Guidelines#delete-vld-report"><span class="badge bar badge--danger">DEL</span>Delete VLD Report</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `More Insights Details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Insights-API-Guidelines#get-more-insights-details"><span class="badge bar badge--primary">GET</span>List of Insights Types</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Insights-API-Guidelines#get-list-of-insights-status"><span class="badge bar badge--primary">GET</span>List of Insights Status</a>',
              defaultStyle: true,
            },
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Inventory API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/Inventory-API-Guide'
      },
      items: [
        {
          type: 'link',
          label: 'Overview',
          href: '/docs/Guidelines/Inventory-API-Guide#overview',
          className: 'sidebarItem'
        },
        {
          type: 'category',
          label: 'Inventory Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#get-inventory-details"><span class="badge bar badge--primary"></span>Query Parameters</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#get-list-of-inventories"><span class="badge bar badge--primary">GET</span>List of Inventories</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#get-inventory-distribution"><span class="badge bar badge--primary">GET</span>Inventory Distribution</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#get-inventories-count"><span class="badge bar badge--primary">GET</span>Inventories Count</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#get-inventory-group-types"><span class="badge bar badge--primary">GET</span>Inventory Group Types</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#get-list-of-blocked-inventories"><span class="badge bar badge--primary">GET</span>List of Blocked Inventories</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Inventory Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#inventory-management"><span class="badge bar badge--success">POST</span>Campaign Inventory Optimization</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#block-inventories"><span class="badge bar badge--success">POST</span>Block Inventories</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#download-csv-inventory-list"><span class="badge bar badge--success">POST</span>Download CSV Inventory List</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#get-inventory-based-on-csv-file"><span class="badge bar badge--success">POST</span>Inventory Based on CSV File</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#get-distribution-of-inventory-based-on-csv-file"><span class="badge bar badge--success">POST</span>Distribution of Inventory Based on CSV File</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#get-inventory-count-based-on-csv-file"><span class="badge bar badge--success">POST</span>Inventory Count Based on CSV File</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Inventory Groups`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#inventory-groups"><span class="badge bar badge--primary">GET</span>List of Inventory Groups</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#get-list-of-inventory-groups-statistics"><span class="badge bar badge--primary">GET</span>List of Inventory Groups Statistics</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#get-list-of-campaigns-attached-to-group"><span class="badge bar badge--primary">GET</span>List of Campaigns Attached to Group</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#get-list-of-pmp-deals-in-an-inventory-group"><span class="badge bar badge--primary">GET</span>List of PMP Deals In an Inventory Group</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#get-csv-list-of-pmp-deals-in-an-inventory-group"><span class="badge bar badge--primary">GET</span>CSV List of PMP Deals In an Inventory Group</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#get-list-of-open-exchange-inventories-in-an-inventory-group"><span class="badge bar badge--primary">GET</span>List of Open Exchange Inventories In an Inventory Group</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#get-distributions-of-open-exchange-inventories-in-an-inventory-group"><span class="badge bar badge--primary">GET</span>Distributions of Open Exchange Inventories In an Inventory Group</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#get-count-of-open-exchange-inventories-in-an-inventory-group"><span class="badge bar badge--primary">GET</span>Count of Open Exchange Inventories In an Inventory Group</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#get-list-of-contextual-inventories-for-an-inventory-group"><span class="badge bar badge--primary">GET</span>List of Contextual Inventories For an Inventory Group</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#get-count-of-contextual-inventories-for-an-inventory-group"><span class="badge bar badge--primary">GET</span>Count of Contextual Inventories For an Inventory Group</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#get-csv-file-of-contextual-inventories-for-an-inventory-group"><span class="badge bar badge--primary">GET</span>CSV File of Contextual Inventories For an Inventory Group</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#contextual-inventory"><span class="badge bar badge--primary">GET</span>Contextual Inventory</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Inventory Group Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#inventory-group-management"><span class="badge bar badge--success">POST</span>Create a New Inventory Group</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#add-or-remove-mappings-to-an-inventory-group"><span class="badge bar badge--success">POST</span>Add or Remove Mappings to an Inventory Group</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#add-or-remove-customers-from-a-shared-inventory-group"><span class="badge bar badge--info">PATCH</span>Add or Remove Customers From a Shared Inventory Group</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#edit-inventory-group"><span class="badge bar badge--info">PATCH</span>Edit Inventory Group</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#delete-inventory-group"><span class="badge bar badge--danger">DEL</span>Delete Inventory Group</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Private Marketplace (PMP) Deals Details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#private-marketplace-pmp-deals-details"><span class="badge bar badge--success">POST</span>List of PMP Deals</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#get-pmp-deal-details-by-ids"><span class="badge bar badge--primary">GET</span>PMP Deal Details by IDs</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#get-list-of-customers-associated-with-campaigns-for-a-pmp-deal"><span class="badge bar badge--primary">GET</span>List of Customers Associated with Campaigns for a PMP Deal</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#get-count-of-pmp-deals-for-all-statuses"><span class="badge bar badge--primary">GET</span>Count of PMP Deals for All statuses</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#get-list-of-deal-types"><span class="badge bar badge--primary">GET</span>List of Deal Types</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#get-list-of-deal-statuses"><span class="badge bar badge--primary">GET</span>List of Deal statuses</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `PMP Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#pmp-management"><span class="badge bar badge--primary"></span>Resource Properties</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#create-pmp-deal"><span class="badge bar badge--success">POST</span>Create PMP Deal</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#update-pmp-deal"><span class="badge bar badge--info">PATCH</span>Update PMP Deal</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#delete-pmp-deal"><span class="badge bar badge--danger">DEL</span>Delete PMP Deal</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Programmatic Guarantee (PG) Deals Details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#programmatic-guarantee-pg-deals-details"><span class="badge bar badge--primary">GET</span>List of PG Deals</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#get-pg-deals-details-by-id"><span class="badge bar badge--primary">GET</span>PG Deals Details by ID</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `PG Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#pg-management"><span class="badge bar badge--primary"></span>Resource Properties</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#create-pg-deal"><span class="badge bar badge--success">POST</span>Create PG Deal</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#update-pg-deal-details"><span class="badge bar badge--info">PATCH</span>Update PG Deal Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Inventory-API-Guide#delete-pg-deal"><span class="badge bar badge--danger">DEL</span>Delete PG Deal</a>',
              defaultStyle: true,
            },
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Master API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/Master-API-Guidelines'
      },
      items: [
        {
          type: 'link',
          label: 'Overview',
          href: '/docs/Guidelines/Master-API-Guidelines#overview',
          className: 'sidebarItem'
        },
        {
          type: 'category',
          label: 'Geographical Data',
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-geographical-data"><span class="badge bar badge--success">POST</span>Geographical Data</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-zip-codes-and-state-ids"><span class="badge bar badge--success">POST</span>Zip Codes and State IDs</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-state-segment"><span class="badge bar badge--success">POST</span>State Segment</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-senate-district-segment"><span class="badge bar badge--success">POST</span>Senate District Segment</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-house-district-segment"><span class="badge bar badge--success">POST</span>House District Segment</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-gender-segment"><span class="badge bar badge--success">POST</span>Gender Segment</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-age-segment"><span class="badge bar badge--primary">GET</span>Age Segment</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-language-segment"><span class="badge bar badge--primary">GET</span>Language Segment</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-interest-segment"><span class="badge bar badge--primary">GET</span>Interest Segment</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-income-range-segment"><span class="badge bar badge--primary">GET</span>Income Range Segment</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-ethnicity-segment"><span class="badge bar badge--primary">GET</span>Ethnicity Segment</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-ethnicity-group-segment"><span class="badge bar badge--primary">GET</span>Ethnicity Group Segment</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-dma-code-segment"><span class="badge bar badge--success">POST</span>DMA Code Segment</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-county-segment"><span class="badge bar badge--success">POST</span>County Segment</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-country-segment"><span class="badge bar badge--success">POST</span>Country Segment</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-congressional-district-segment"><span class="badge bar badge--success">POST</span>Congressional District Segment</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-city-segment"><span class="badge bar badge--success">POST</span>City Segment</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-location-types"><span class="badge bar badge--primary">GET</span>Location Types</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-location-details-by-location-type"><span class="badge bar badge--primary">GET</span>Location Details by Location Type</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-timezones"><span class="badge bar badge--primary">GET</span>Timezones</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-carriers-and-states-by-country-id"><span class="badge bar badge--primary">GET</span>Carriers and States by Country ID</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Creative Data`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-creative-data"><span class="badge bar badge--primary"></span>Query Parameters</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-creative-types"><span class="badge bar badge--primary">GET</span>Creative Types</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-rtb-creative-types"><span class="badge bar badge--primary">GET</span>RTB Creative Types</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-creative-sizes"><span class="badge bar badge--primary">GET</span>Creative Sizes</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-video-skip-parameters"><span class="badge bar badge--primary">GET</span>Video Skip Parameters</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-video-roll-position-parameters"><span class="badge bar badge--primary">GET</span>Video Roll Position Parameters</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-video-player-size-parameters"><span class="badge bar badge--primary">GET</span>Video Player Size Parameters</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-video-playback-method-parameters"><span class="badge bar badge--primary">GET</span>Video Playback Method Parameters</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-video-placement-type-parameters"><span class="badge bar badge--primary">GET</span>Video Placement Type Parameters</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `More Data`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-more-data"><span class="badge bar badge--primary">GET</span>Network Types for Targeting</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-device-os-for-targeting"><span class="badge bar badge--primary">GET</span>Device OS for Targeting</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-manufacturers-for-targeting"><span class="badge bar badge--primary">GET</span>Manufacturers for Targeting</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-channels-for-inventory"><span class="badge bar badge--primary">GET</span>Channels for Inventory</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-verticals"><span class="badge bar badge--primary">GET</span>Verticals</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-traffic-types"><span class="badge bar badge--primary">GET</span>Traffic Types</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-inventory-types"><span class="badge bar badge--primary">GET</span>Inventory Types</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-exchanges"><span class="badge bar badge--primary">GET</span>Exchanges</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-deal-curation-types"><span class="badge bar badge--primary">GET</span>Deal Curation Types</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-publisher-ad-categories"><span class="badge bar badge--success">POST</span>Publisher Ad Categories</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-device-type"><span class="badge bar badge--success">POST</span>Device Type</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Master-API-Guidelines#get-inventory"><span class="badge bar badge--success">POST</span>Inventory</a>',
              defaultStyle: true,
            },
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Planner API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/Planner-API-Guidelines'
      },
      items: [
        {
          type: 'category',
          label: 'Proposal Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Planner-API-Guidelines#get-proposal-details-by-id"><span class="badge bar badge--primary">GET</span>Proposal Details by ID</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Planner-API-Guidelines#get-list-of-proposals"><span class="badge bar badge--primary">GET</span>List of Proposals</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Planner-API-Guidelines#proposal-reach-and-impressions-summary"><span class="badge bar badge--success">POST</span>Reach and Impressions Summary</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Planner-API-Guidelines#proposal-device-type-summary"><span class="badge bar badge--success">POST</span>Device Type Summary</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Planner-API-Guidelines#proposal-channel-type-summary"><span class="badge bar badge--success">POST</span>Channel Type Summary</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Planner-API-Guidelines#proposal-bid-landscape-summary"><span class="badge bar badge--success">POST</span>Bid Landscape Summary</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Planner-API-Guidelines#download-proposal"><span class="badge bar badge--primary">GET</span>Download Proposal</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Proposal Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Planner-API-Guidelines#create-proposal"><span class="badge bar badge--success">POST</span>Create Proposal</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Planner-API-Guidelines#create-draft-proposal"><span class="badge bar badge--success">POST</span>Create Draft Proposal</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Planner-API-Guidelines#update-proposal"><span class="badge bar badge--info">PATCH</span>Update Proposal</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Planner-API-Guidelines#update-draft-proposal"><span class="badge bar badge--info">PATCH</span>Update Draft Proposal</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Planner-API-Guidelines#generate-campaigns-for-ready-proposal"><span class="badge bar badge--success">POST</span>Generate Campaigns</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Planner-API-Guidelines#restore-proposal"><span class="badge bar badge--info">PATCH</span>Restore Proposal</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Planner-API-Guidelines#duplicate-proposal"><span class="badge bar badge--success">POST</span>Duplicate Proposal</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Planner-API-Guidelines#delete-proposal"><span class="badge bar badge--danger">DEL</span>Delete Proposal</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `More Details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Planner-API-Guidelines#proposal-status-list"><span class="badge bar badge--primary">GET</span>Proposal Status List</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Planner-API-Guidelines#proposal-summary-parameters-list"><span class="badge bar badge--primary">GET</span>Parameters List</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Planner-API-Guidelines#get-user-access-details"><span class="badge bar badge--primary">GET</span>User Access Details</a>',
              defaultStyle: true,
            },
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Reports API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/Reports-API-Guidelines'
      },
      items: [
        {
          type: 'link',
          label: 'Overview',
          href: '/docs/Guidelines/Reports-API-Guidelines#overview',
          className: 'sidebarItem'
        },
        {
          type: 'category',
          label: 'Reports Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Reports-API-Guidelines#get-reports-details"><span class="badge bar badge--primary">GET</span>List of Reports</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Reports-API-Guidelines#get-report-by-id"><span class="badge bar badge--primary">GET</span>Report by ID</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Reports Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Reports-API-Guidelines#reports-management"><span class="badge bar badge--primary"></span>Resource Properties</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Reports-API-Guidelines#create-report"><span class="badge bar badge--success">POST</span>Create Report</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Reports-API-Guidelines#execute-a-report"><span class="badge bar badge--success">POST</span>Execute a Report</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Reports-API-Guidelines#delete-a-report"><span class="badge bar badge--danger">DEL</span>Delete a Report</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Reports-API-Guidelines#edit-a-report"><span class="badge bar badge--info">PATCH</span>Edit a Report</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Reports-API-Guidelines#duplicate-a-report"><span class="badge bar badge--success">POST</span>Duplicate a Report</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Scheduling Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Reports-API-Guidelines#scheduling-management"><span class="badge bar badge--success">POST</span>Schedule a Report</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Reports-API-Guidelines#update-a-report-schedule"><span class="badge bar badge--info">PATCH</span>Update a Report Schedule</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Reports-API-Guidelines#delete-report-schedule"><span class="badge bar badge--danger">DEL</span>Delete Report Schedule</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Reports-API-Guidelines#unsubscribe-an-email-from-all-scheduled-reports"><span class="badge bar badge--primary">GET</span>Unsubscribe an Email from All Scheduled Reports</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Reports-API-Guidelines#unsubscribe-an-email-from-a-report-schedule"><span class="badge bar badge--primary">GET</span>Unsubscribe an Email from a Report Schedule</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Get More Report Details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Reports-API-Guidelines#get-more-report-details"><span class="badge bar badge--success">POST</span>URL for Report Download</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Reports-API-Guidelines#get-a-list-of-conversions-custom-fields"><span class="badge bar badge--success">POST</span>List of Conversion\'s Custom Fields</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Reports-API-Guidelines#get-report-request-types"><span class="badge bar badge--primary">GET</span>Report Request Types</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Reports-API-Guidelines#get-report-file-types"><span class="badge bar badge--primary">GET</span>Report File Types</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Reports-API-Guidelines#get-report-delivery-frequency-types"><span class="badge bar badge--primary">GET</span>Report Delivery Frequency Types</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Reports-API-Guidelines#get-dimensions-and-metrics-details"><span class="badge bar badge--primary">GET</span>Dimensions and Metrics Details</a>',
              defaultStyle: true,
            },
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'User Management API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/User-Profile-Guidelines'
      },
      items: [
        {
          type: 'link',
          label: 'Overview',
          href: '/docs/Guidelines/User-Profile-Guidelines#overview',
          className: 'sidebarItem'
        },
        {
          type: 'html',
          value: '<a class="menu__link" href="/docs/Guidelines/User-Profile-Guidelines#send-user-invitation"><span class="badge bar badge--success">POST</span>Send User Invitation</a>',
          defaultStyle: true,
          className: 'sidebarItem'
        },
        {
          type: 'html',
          value: '<a class="menu__link" href="/docs/Guidelines/User-Profile-Guidelines#validate-user-invite"><span class="badge bar badge--success">POST</span>Validate User Invite</a>',
          defaultStyle: true,
          className: "sidebarItem"
        },
        {
          type: 'html',
          value: '<a class="menu__link" href="/docs/Guidelines/User-Profile-Guidelines#user-sign-up"><span class="badge bar badge--success">POST</span>User Sign-Up</a>',
          defaultStyle: true,
          className: "sidebarItem"
        },
        {
          type: 'html',
          value: '<a class="menu__link" href="/docs/Guidelines/User-Profile-Guidelines#login"><span class="badge bar badge--success">POST</span>Login</a>',
          defaultStyle: true,
          className: "sidebarItem"
        },
        {
          type: 'html',
          value: '<a class="menu__link" href="/docs/Guidelines/User-Profile-Guidelines#user-logout"><span class="badge bar badge--success">POST</span>User Logout</a>',
          defaultStyle: true,
          className: "sidebarItem"
        },
        {
          type: 'html',
          value: '<a class="menu__link" href="/docs/Guidelines/User-Profile-Guidelines#change-password"><span class="badge bar badge--success">POST</span>Change Password</a>',
          defaultStyle: true,
          className: "sidebarItem"
        },
        {
          type: 'html',
          value: '<a class="menu__link" href="/docs/Guidelines/User-Profile-Guidelines#reset-password-email"><span class="badge bar badge--success">POST</span>Reset Password Email</a>',
          defaultStyle: true,
          className: "sidebarItem"
        },
        {
          type: 'html',
          value: '<a class="menu__link" href="/docs/Guidelines/User-Profile-Guidelines#update-user-profile"><span class="badge bar badge--info">PATCH</span>Update User Profile</a>',
          defaultStyle: true,
          className: "sidebarItem"
        },
        {
          type: 'html',
          value: '<a class="menu__link" href="/docs/Guidelines/User-Profile-Guidelines#get-list-of-users"><span class="badge bar badge--primary">GET</span>List of Users</a>',
          defaultStyle: true,
          className: "sidebarItem"
        },
        {
          type: 'html',
          value: '<a class="menu__link" href="/docs/Guidelines/User-Profile-Guidelines#user-app-access-list"><span class="badge bar badge--primary">GET</span>User App Access List</a>',
          defaultStyle: true,
          className: "sidebarItem"
        },
        {
          type: 'html',
          value: '<a class="menu__link" href="/docs/Guidelines/User-Profile-Guidelines#add-app-access-for-user"><span class="badge bar badge--success">POST</span>Add App Access for User</a>',
          defaultStyle: true,
          className: "sidebarItem"
        },
      ],
    },
    {
      type: 'category',
      label: 'Workspace API',
      className: 'sidebarCategory',
      link: {
        type: 'doc',
        id: 'Guidelines/Workspace-Guidelines'
      },
      items: [
        {
          type: 'link',
          label: 'Overview',
          href: '/docs/Guidelines/Workspace-Guidelines#overview',
          className: 'sidebarItem'
        },
        {
          type: 'category',
          label: 'Organization Details',
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#organization-details"><span class="badge bar badge--primary"></span>Resource Properties</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#get-list-of-allowed-organizations"><span class="badge bar badge--primary">GET</span>List of Allowed Organizations</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#get-organization-details"><span class="badge bar badge--primary">GET</span>Organization Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#check-for-available-domain"><span class="badge bar badge--primary">GET</span>Check for Available Domain</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Organization Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#organization-management"><span class="badge bar badge--info">PATCH</span>Update Organization Profile</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#update-organization-email"><span class="badge bar badge--info">PATCH</span>Update Organization Email</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Workspace Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#workspace-management"><span class="badge bar badge--success">POST</span>Create a Workspace</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#update-workspace-domain"><span class="badge bar badge--info">PATCH</span>Update Workspace Domain</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#validate-workspace-domain"><span class="badge bar badge--success">POST</span>Validate Workspace Domain</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#get-list-of-workspaces"><span class="badge bar badge--primary">GET</span>List of Workspaces</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Customer Details`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#customer-details"><span class="badge bar badge--primary"></span>Customer Resource Properties</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#get-customer-details"><span class="badge bar badge--primary">GET</span>Customer Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#get-basic-customer-details"><span class="badge bar badge--success">POST</span>Basic Customer Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#get-multi-level-customers-list"><span class="badge bar badge--primary">GET</span>Multi-level Customers List</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#get-immediate-customers-list"><span class="badge bar badge--primary">GET</span>Immediate Customers List</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#customer-operations-resource-properties"><span class="badge bar badge--primary"></span>Customer Operations Resource Properties</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#get-customer-operations-details"><span class="badge bar badge--primary">GET</span>Customer Operations Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#get-customer-operations-label-list"><span class="badge bar badge--primary">GET</span>Customer Operations Label List</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#get-count-of-customers-by-status"><span class="badge bar badge--primary">GET</span>Count of Customers by Status</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#get-list-of-users-for-selected-customer"><span class="badge bar badge--primary">GET</span>List of Users for Selected Customer</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#get-list-of-user-assigned-customers"><span class="badge bar badge--primary">GET</span>List of User Assigned Customers</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#get-users-remaining-customers"><span class="badge bar badge--primary">GET</span>User\'s Remaining Customers</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#get-list-of-customers-allowed-applications"><span class="badge bar badge--primary">GET</span>List of Customer\'s Allowed Applications</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#get-list-of-remaining-apps-for-customer"><span class="badge bar badge--primary">GET</span>List of Remaining Apps for Customer</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#get-list-of-advertisers-for-customer"><span class="badge bar badge--primary">GET</span>List of Advertisers for Customer</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#get-customer-config-details"><span class="badge bar badge--primary">GET</span>Customer Config Details</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Customer Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#customer-management"><span class="badge bar badge--success">POST</span>Invite Customer to Platform</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#resend-customer-invite"><span class="badge bar badge--success">POST</span>Resend Customer Invite</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#cancel-customer-invite"><span class="badge bar badge--danger">DEL</span>Cancel Customer Invite</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#customer-signup"><span class="badge bar badge--success">POST</span>Customer Signup</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#get-customer-signup-form"><span class="badge bar badge--primary">GET</span>Customer Signup Form</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#assign-customer-to-user"><span class="badge bar badge--success">POST</span>Assign Customer to User</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#unassign-customer-from-user"><span class="badge bar badge--success">POST</span>Unassign Customer from User</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#approve-customer"><span class="badge bar badge--info">PATCH</span>Approve Customer</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#reject-customer"><span class="badge bar badge--info">PATCH</span>Reject Customer</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#add-customer-app-access"><span class="badge bar badge--success">POST</span>Add Customer App Access</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#revoke-customer-app-access"><span class="badge bar badge--success">POST</span>Revoke Customer App Access</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#put-customer-on-hold"><span class="badge bar badge--info">PATCH</span>Put Customer On-Hold</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#re-activate-customer"><span class="badge bar badge--info">PATCH</span>Re-Activate Customer</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#add-label-for-customer-operation"><span class="badge bar badge--success">POST</span>Add Label for Customer Operation</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#enable-bid-shading-for-customer"><span class="badge bar badge--info">PATCH</span>Enable Bid Shading for Customer</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#update-customer-operations-details"><span class="badge bar badge--info">PATCH</span>Update Customer Operations Details</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Advertiser Management`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#advertiser-management"><span class="badge bar badge--primary"></span>Advertiser Resource Properties</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#get-list-of-advertiser-profile-and-details"><span class="badge bar badge--primary">GET</span>List of Advertiser Profile and Details</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#add-advertiser-profile"><span class="badge bar badge--success">POST</span>Add Advertiser Profile</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#edit-advertiser-profile"><span class="badge bar badge--info">PATCH</span>Edit Advertiser Profile</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#delete-advertiser-profile"><span class="badge bar badge--danger">DEL</span>Delete Advertiser Profile</a>',
              defaultStyle: true,
            },
          ]
        },
        {
          type: `category`,
          label: `Static Details Lists`,
          className: 'sidebarItem',
          items: [
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#static-details-lists"><span class="badge bar badge--primary">GET</span>Organization Workspace Status</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#customer-type"><span class="badge bar badge--primary">GET</span>Customer Type</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#customer-payment-type"><span class="badge bar badge--primary">GET</span>Customer Payment Type</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#customer-account-type"><span class="badge bar badge--primary">GET</span>Customer Account Type</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#customer-list-sortable-fields"><span class="badge bar badge--primary">GET</span>Customer List Sortable Fields</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#organization-expertise"><span class="badge bar badge--primary">GET</span>Organization Expertise</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#company-size"><span class="badge bar badge--primary">GET</span>Company Size</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#industries"><span class="badge bar badge--primary">GET</span>Industries</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#media-budget"><span class="badge bar badge--primary">GET</span>Media Budget</a>',
              defaultStyle: true,
            },
            {
              type: 'html',
              value: '<a class="menu__link" href="/docs/Guidelines/Workspace-Guidelines#verticals"><span class="badge bar badge--primary">GET</span>Verticals</a>',
              defaultStyle: true,
            },
          ]
        },
      ],
    },
  ]
}

export default sidebars;
