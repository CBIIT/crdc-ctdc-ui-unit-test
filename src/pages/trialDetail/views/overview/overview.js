import React from 'react';
import {
  Grid,
  withStyles,
} from '@material-ui/core';

// import {
//   customSorting,
//   studyDisposition,
// } from '../../utils';
import {
  // eslint-disable-next-line no-unused-vars
  externalIcon,
} from '../../../../bento/trialDetailData';
import SampleProfile from '../SampleProfile';
import OverviewThemeProvider from './overviewThemeConfig';
import classNames from 'classnames';

const Overview = ({
  classes,
  studyData = {},
  diagnoses,
  caseFileTypes,
  data,
  nodeCount,
  supportingDataCount,
  clinicalDataTabIndex,
  supportingDataTabIndex,
  setCurrentTab,
}) => {
  // eslint-disable-next-line no-unused-vars
  const getImageTypes = (typeString) => {
    const types = JSON.parse(typeString);
    return types.join(', ');
  };

  // eslint-disable-next-line no-unused-vars
  const getAccessTypeString = (accessType) => (accessType === 'Cloud'
    ? 'Available only via the Cloud' : 'Available for Download');

  return (
    <OverviewThemeProvider>
      <div className={classes.container}>
        <div className={classes.detailContainer}>
          <Grid container>
            <Grid item lg={6} md={6} sm={6} xs={12} className={classes.borderRight}>
              <Grid container spacing={1} direction="row" className={classes.detailContainerLeft}>
                <Grid item xs={12} className={classes.detailContainerItem}>
                  <Grid item container direction="row">
                    <Grid item xs={12} className={classes.title}>
                      Trial Name:
                    </Grid>
                    <Grid item xs={12} className={classes.content}>
                      Cancer Moonshot Biobank
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container className={classes.detailContainerItems}>
                  <Grid item xs={12} className={classes.detailContainerItem}>
                    <Grid item container direction="row">
                      <Grid item xs={12} className={classes.title}>
                        TRIAL DESCRIPTION                     
                      </Grid>
                      <Grid item xs={12} className={classes.content}>
                        Cancer Moonshot
                        Biobank" is a longitudinal study. This means it
                        collects and stores samples and information
                        over time, throughout the course of a
                        patient's cancer treatment. By looking at
                        samples and information collected from the
                        same people over time, researchers hope to
                        better understand how cancer changes over
                        time and over the course of medical
                        treatments.
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className={classes.detailContainerItem}>
                    <Grid item container direction="row">
                      <Grid item xs={12} className={classes.title}>
                        TRIAL TYPE                     
                      </Grid>
                      <Grid item xs={12} className={classes.content}>
                        Observational
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className={classes.detailContainerItem}>
                    <Grid item container direction="row">
                      <Grid item xs={12} className={classes.title}>
                        DATES OF CONDUCT
                      </Grid>
                      <Grid item xs={12} className={classes.content}>
                        September 2020 - September 2025 (estimated)
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className={classes.detailContainerItem}>
                    <Grid item container direction="row">
                      <Grid item xs={12} className={classes.title}>
                        ASSOCIATED LINKS
                      </Grid>
                      <Grid item xs={12} className={classes.content}>
                        <a href='/'>ClinicalTrials.gov record</a> <br/>
                        <a href='/'>About the Biobank</a>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className={classes.detailContainerItem}>
                    <Grid item container direction="row">
                      <Grid item xs={12} sm={4} className={classes.title}>
                      </Grid>
                      <Grid item xs={12} sm={6} className={classes.content}>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Grid
                  container
                  spacing={1}
                  direction="row"
                  className={classes.detailContainerRight}
                >
                  <Grid
                    item
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    className={classes.detailContainerRightTop}
                  >
                    <Grid container spacing={1}>
                      <Grid item xs={12} className={classes.containerHeader}>
                        <span className={classes.detailContainerHeaderText}>DIAGNOSES</span>
                      </Grid>
                    </Grid>
                    <Grid container className={classes.paddingTop12}>
                      
                      <Grid item xs={12}>
                        <span className={classes.content}>
                          Acute Myeloid Leukemia Not Otherwise Specified
                        </span>
                      </Grid>

                      <Grid item xs={12}>
                        <span className={classes.content}>
                          {' '}
                          Colorectal Carcinoma
                        </span>
                      </Grid>
                      <Grid item xs={12}>
                        <span className={classes.content}>
                          {' '}
                          Plasma Cell Myeloma
                        </span>
                      </Grid>
                      <Grid item xs={12}>
                        <span className={classes.content}>
                          {' '}
                          Lung Non-Small Cell CarcinomaProstate Carcinoma
                        </span>
                      </Grid>
                      <Grid item xs={12}>
                        <span className={classes.content}>
                          {' '}
                          Lung Small Cell Carcinoma
                        </span>
                      </Grid>
                      <Grid item xs={12}>
                        <span className={classes.content}>
                          {' '}
                          Melanoma
                        </span>
                      </Grid>
                      <Grid item xs={12}>
                        <span className={classes.content}>
                          {' '}
                          Gastroesophageal Junction Adenocarcinoma
                        </span>
                      </Grid>
                      {/*{diagnoses.sort((a, b) => customSorting(a, b, 'alphabetical')).map((diagnosis, index) => ())} */}
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    className={classes.detailContainerRightTop}
                  >
                    <Grid container spacing={1}>
                      <Grid item xs={12} className={classes.containerHeader}>
                        <span className={classes.detailContainerHeaderText}>PARTICIPANT FILE TYPES</span>
                      </Grid>
                    </Grid>
                    <Grid container className={classes.paddingTop12}>
                     
                        <div className={classes.content}>
                          Molecular Panel Variant Call File Clinical Report File
                        </div>
                    </Grid>
                  </Grid>
                  {/*<div><hr className={classNames(classes.hrLine, classes.hrLineRight)} /></div>*/}
                </Grid>
                <Grid container spacing={1} direction="row" className={classes.detailContainerRight}>
                  <SampleProfile data={data} />

                  {/* START: Image Collection */}
                  <Grid item lg={6} md={6} sm={6} xs={12} className={classes.marginTop10}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <span className={classes.detailContainerHeaderText}>
                          Biospecimen PROFILE
                        </span>
                      </Grid>
                    </Grid>
                    <Grid container className={classes.detailContainerItems}>
                      {/* eslint-disable-next-line no-constant-condition */}
                      {supportingDataCount > 0 || nodeCount > 0 ? (
                        <Grid item xs={12} className={classes.detailContainerItem}>
                          {
                            nodeCount > 0 && (
                            <Grid item container direction="row">
                              <Grid className={classes.titleCD}>
                                Clinical Data in:
                              </Grid>
                              <Grid
                                item
                                className={classNames(classes.content, classes.marginTopN5)}
                              >
                                <button
                                  type="button"
                                  onClick={() => setCurrentTab(clinicalDataTabIndex)}
                                  className={classes.additionalDataLink}
                                >
                                  {nodeCount > 1 ? `${nodeCount} Nodes` : `${nodeCount} Node`}
                                </button>
                              </Grid>
                            </Grid>
                            )
                          }
                          {
                            supportingDataCount > 0 && (
                            <Grid item container direction="row">
                              <Grid item className={classes.titleCD}>
                                Supporting Data in:
                              </Grid>
                              <Grid className={classes.content}>
                                <button
                                  type="button"
                                  onClick={() => setCurrentTab(supportingDataTabIndex)}
                                  className={classes.additionalDataLink}
                                >
                                  {supportingDataCount > 1 ? `${supportingDataCount} Repositories` : `${supportingDataCount} Repository`}
                                </button>
                              </Grid>
                            </Grid>
                            )
                          }
                        </Grid>
                      ) : (
                        <Grid item xs={12} sm={10} className={classes.content}>
                          <div className={classes.content}>
                            Under Development ...
                          </div>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                  {/* END: Image Collection */}
                </Grid>
              </Grid>
            }
          </Grid>
        </div>
      </div>
    </OverviewThemeProvider>
  );
};

const styles = (theme) => ({
  container: {
    fontFamily: 'Raleway, sans-serif',
    paddingLeft: '33px',
    paddingRight: '33px',
    paddingBottom: '25px',
  },
  additionalDataLink: {
    color: '#DC762F',
    fontStyle: 'normal',
    fontWeight: 600,
    fontFamily: 'Open Sans',
    fontSize: '13px',
    background: 'none !important',
    border: 'none',
    padding: '0 !important',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  spacer: {
    marginTop: '50px',
    height: '80px',
    width: '100%',
  },
  studyDescription: {
    paddingTop: '0px !important',
  },
  detailContainer: {
    margin: 'auto',
    paddingLeft: '36px',
    paddingRight: '36px',
    fontFamily: theme.custom.fontFamilySans,
    letterSpacing: '0.014em',
    color: '#000000',
    size: '12px',
    lineHeight: '23px',
  },
  hrLine: {
    width: '50px',
    float: 'left',
    marginTop: '30px',
    border: '#81a6b9 2px solid',
    background: '#81a6b9',
  },
  hrLineRight: {
    marginLeft: '4px',
  },
  hrLineLeftMargin: {
    marginLeft: '4px',
  },
  borderRight: {
    borderRight: '#81a6b9 1px solid',
  },
  detailContainerLeft: {
    display: 'block',
    padding: '28px 20px 5px 10px',
    minHeight: '500px',
    maxHeight: '500px',
    overflowY: 'auto',
    overflowX: 'hidden',
    width: 'calc(100% + 8px) !important',
    margin: '0px -8px',
  },
  containerHeader: {
    marginBottom: '24px',
    lineHeight: '9px',
  },
  detailContainerHeaderText: {
    textTransform: 'uppercase',
    fontFamily: theme.custom.fontFamilySans,
    fontSize: '17px',
    letterSpacing: '0.017em',
    color: '#0296c9',
  },
  content: {
    fontSize: '12px',
  },
  detailContainerItems: {
    paddingTop: '7px',
  },
  title: {
    color: '#0296c9',
    fontFamily: theme.custom.fontFamilySans,
    fontSize: '12px',
    letterSpacing: '0.017em',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  titleCD: {
    color: '#0296c9',
    fontFamily: theme.custom.fontFamilySans,
    fontSize: '12px',
    letterSpacing: '0.017em',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginRight: '4px',
  },
  detailContainerItem: {
    paddingTop: '15px !important',
    paddingLeft: '2px',
  },
  detailContainerRight: {
    padding: '32px 20px 5px 10px',
    maxHeight: '500px',
    overflowY: 'auto',
    overflowX: 'hidden',
    width: 'calc(100% + 8px)',
  },
  detailContainerRightTop: {
    maxHeight: '250px',
    paddingRight: '0px',
    overflow: 'auto',
  },
  marginTop10: {
    marginTop: '10px',
  },
  paddingTop12: {
    paddingTop: '4px',
  },
  linkIcon: {
    width: '20px',
  },
  tableContainer: {
    background: '#f3f3f3',
  },
  paddingLeft5: {
    paddingLeft: '5px',
  },
  outLink: {
    color: '#DC762F',
    textDecoration: 'none',
    fontSize: '12px',
    position: 'relative',
    bottom: '7px',
  },
  tableContainer2: {
    background: '#fff',
  },
});

export default withStyles(styles, { withTheme: true })(Overview);
