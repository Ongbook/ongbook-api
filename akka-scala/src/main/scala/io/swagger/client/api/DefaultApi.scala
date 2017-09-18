/**
 * NOTE: This class is auto generated by the akka-scala (beta) swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * For any issue or feedback, please open a ticket via https://github.com/swagger-api/swagger-codegen/issues/new
 */
package io.swagger.client.api

import io.swagger.client.model.Demand
import io.swagger.client.model.NGO
import io.swagger.client.core._
import io.swagger.client.core.CollectionFormats._
import io.swagger.client.core.ApiKeyLocations._

object DefaultApi {

  /**
   * This is an example opeartion to show how security is applied to the call.
   * 
   * Expected answers:
   *   code 200 : Seq[Demand] (successful operation)
   */
  def demandsGet(): ApiRequest[Seq[Demand]] =
    ApiRequest[Seq[Demand]](ApiMethods.GET, "https://virtserver.swaggerhub.com/argonautscrew/ongbook-api-v2/1.0.0", "/demands", "application/json")
      .withSuccessResponse[Seq[Demand]](200)
        /**
   * This is an example opeartion to show how security is applied to the call.
   * 
   * Expected answers:
   *   code 200 : Seq[NGO] (successful operation)
   */
  def ngosGet(): ApiRequest[Seq[NGO]] =
    ApiRequest[Seq[NGO]](ApiMethods.GET, "https://virtserver.swaggerhub.com/argonautscrew/ongbook-api-v2/1.0.0", "/ngos", "application/json")
      .withSuccessResponse[Seq[NGO]](200)
      

}
