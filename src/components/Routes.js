import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Route from './Route';
const Courses = () => (
  <Query
    query={gql`
    {
      plan(
        fromPlace: "Eficode Oy, Helsinki::60.169392,24.925751",
        toPlace: "Kotipizza Helsinki Kruununhaka::60.170720,24.956420",
      ) {
        itineraries {
          walkDistance
          duration
          fares {
            cents
            currency
          }
          legs {
            mode
            startTime
            endTime
            duration
            distance
            from {
              lat
              lon
              name
              stop {
                zoneId
                code
                name
                gtfsId
                stoptimesForPatterns(omitNonPickups: true, timeRange: 1800) {
                  pattern {
                    code
                  }
                  stoptimes {
                    scheduledDeparture
                  }
                }
              }
            }
            to {
              lat
              lon
              name
              stop {
                zoneId
                patterns {
                  code
                }
              }
            }
            trip {
              gtfsId
              routeShortName
              pattern {
                code
              }
              tripHeadsign
            }
          }
        }
      }
    }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
        return (
          <table className="table">
            <thead>
              <tr className="table100-head">
                <th>Total Walk Distance(m)</th>
                <th>Total Duration</th>
                <th>Price</th>
                <th>Total Route</th>    
              </tr>
            </thead>
            <tbody>
              {data.plan.itineraries.map((currentRoute) => (
                <Route route={currentRoute} />
              ))}
            </tbody>
          </table>
        )
    }}
  </Query>
);
export default Courses;