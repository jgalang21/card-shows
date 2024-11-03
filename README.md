# Utilizing AWS EKS/Kubernetes to deploy multiple applications

## Objectives

* Deploy two applications on AWS EKS (Elastic Kubernetes Service). The first application was a simple Python application that prints out the container's CPU/MEMORY usage (credit to [this](https://youtu.be/kBWCsHEcWnc?si=XZyyv0-iPzmoK1N5) youtube video) . The second application (this repository) was an old static React Website I created a long time ago for fun. 
* Learn and get more experience with Kubernetes/AWS EKS, Python, and Docker.

## Final Result

Please note none of the websites are actually accessible, I documented everything I did below

![Screenshot 2024-11-03 161526](https://github.com/user-attachments/assets/d7935590-c0c3-4980-8821-aa41663f35a7)
![image](https://github.com/user-attachments/assets/74947abf-46e7-462e-9002-dec5e27cef16)




## Instructions
1. Create the app locally. The Python app was a very simple one, it simply utilized the `psutil` library and Flask to simply output the CPU/Memory usage of the hardware it is currently running on. (This was from the youtube video)
2. The React Application was sitting in my Github repo, so I simply just pulled that one. 
3. Once I was finished and verified they were working locally, I containerized them using Docker. I verified that they were working locally on a Docker container.
4. Now that the docker containers were ready, I pushed both of them to separate repositories on ECR (Elastic Container Registry is similar to Dockerhub but for AWS)
 ![image](https://github.com/user-attachments/assets/df15c23f-f02c-4175-9d49-04156e2e1c0e)

5. Locally on the CLI, I created the EKS Kubernetes cluster. When using eksctl, you can create a cluster and AWS handles most of the "behind the scenes" infrastructure, specifically the VPCs, subnets, etc. The video suggested to use the GUI on AWS but I had a lot of issues with it. Something with the VPC wasn't configured and I verified this, but I found the CLI to be much easier. The node groups were stuck on creating and I couldn't debug why, but I didn't run into this issue with the CLI.
![image](https://github.com/user-attachments/assets/365ae83d-86ba-470b-9ff4-25ffd3a9962f)
![image](https://github.com/user-attachments/assets/a48e8948-50e6-4446-ae9e-be90d1f6f136)
![image](https://github.com/user-attachments/assets/f481aaf6-9964-4019-bd55-db7277755529)

7. I setup the cluster to have the nodes pull my containers stored in ECR. I created two separate deployment and service YAMLs for each application, since they will be hosted on different namespaces. The namespaces gave a sense of "separation", so one URL links to the Python app and the other links to my React app. However they both share the same infrastructure!
8. To verify that this works, I ran `kubectl get services` and opened up both external IPs. Both apps work as intended!
![Screenshot 2024-11-03 163518](https://github.com/user-attachments/assets/a785801d-0c35-4264-acfe-e726d80a0a81)



