"use client"
import React from 'react'
import CustomDropDown from '@/_component/common/Dashboard/CustomDropDown'
import DomainTabUi from '@/_component/domain/DomainTabUi'
import DomainDetail from '@/_component/domain/DomainDetail'
import { useQuery } from '@apollo/client'
import { GET_SUBDOMAINS_API } from '@/_graphql/queries/getsubdomains'
import { GetSubdomainsResponse } from '@/_types/global'
import AttorneyDomainDetail from '@/_component/domain/AttorneyDomainDetail'
import { useGlobalContext } from '@/_context/globalcontext/GlobalContext'
import BackDropLoader from '@/_component/common/Loader/BackDropLoader'

const page = ({ params }: { params: { domainId: string } }) => {
  const { domainId } = params
 const { tabName } = useGlobalContext()

  const { loading, error, data, refetch } = useQuery<GetSubdomainsResponse>(GET_SUBDOMAINS_API, {
    fetchPolicy: 'no-cache',
    variables: { domainId },
  });
  if (loading) return <BackDropLoader/>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data?.getSubdomains) return <></>;

  const renderContent = () => {
    switch (tabName) {
      case 'three':
        return <AttorneyDomainDetail domainId={domainId} />;
      case 'four':
        return <AttorneyDomainDetail domainId={domainId} />;
      default:
        return <DomainDetail domainId={domainId} refetchSubDomains={refetch} />;
    }
  };  
  
  return (
    <>
      <CustomDropDown />
      {renderContent()}
      <DomainTabUi 
      data={data} 
      refetchSubDomains={refetch}
      />
    </>
  )
}

export default page