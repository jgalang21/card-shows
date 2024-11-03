# Utilizing AWS EKS/Kubernetes to deploy multiple applications

## Objectives

* Deploy two applications on AWS EKS (Elastic Kubernetes Service). The first application was a simple Python application that prints out the container's CPU/MEMORY usage (credit to [this](https://youtu.be/kBWCsHEcWnc?si=XZyyv0-iPzmoK1N5) youtube video) . The second application (this repository) was an old static React Website I created a long time ago for fun. 
* Learn and get more experience with Kubernetes/AWS EKS, Python, and Docker.

## Final Result

Image goes here



## Instructions
1. Create the app locally. The Python app was a very simple one, it simply utilized the `psutil` library and Flask to simply output the CPU/Memory usage of the hardware it is currently running on. (This was from the youtube video)
2. The React Application was sitting in my Github repo, so I simply just pulled that one. 
3. Once I was finished and verified they were working locally, I containerized them using Docker. I verified that they were working locally on a Docker container.
4. Now that the docker containers were ready, I pushed both of them to separate repositories on ECR (Elastic Container Registry is similar to Dockerhub but for AWS)
5. Locally on the CLI, I created the EKS Kubernetes cluster. When using eksctl, you can create a cluster and AWS handles most of the "behind the scenes" infrastructure, specifically the VPCs, subnets, etc. The video suggested to use the GUI on AWS but I had a lot of issues with it. Something with the VPC wasn't configured and I verified this, but I found the CLI to be much easier. The node groups were stuck on creating and I couldn't debug why, but I didn't run into this issue with the CLI.
6. I setup the cluster to have the nodes pull my containers stored in ECR. I created two separate deployment and service YAMLs for each application, since they will be hosted on different namespaces. The namespaces gave a sense of "separation", so one URL links to the Python app and the other links to my React app. However they both share the same infrastructure!
7. To verify that this works, I ran `kubectl get services` and opened up both external IPs. Both apps work as intended!




